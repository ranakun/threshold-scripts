const API_KEY = process.env.API_KEY;
const MINTER = process.env.MINTER;

const Bridge = require("./Bridge.json");
const Vault = require("./TBTCVault.json");

const { ethers } = require("hardhat");

const infuraProvider = new ethers.providers.InfuraProvider(
  (network = "goerli"),
  API_KEY
);
const signer = new ethers.Wallet(MINTER, infuraProvider);
const bridgeContract = new ethers.Contract(Bridge.address, Bridge.abi, signer);
const vault = new ethers.Contract(Vault.address, Vault.abi, signer);

async function listenForDepositRevealed() {
  // Set up the event filter and listener
  const filter = bridgeContract.filters.DepositRevealed();
  infuraProvider.on(filter, async (log) => {
    const parsedLog = bridgeContract.interface.parseLog(log);
    const {
      fundingTxHash,
      fundingOutputIndex,
      depositor,
    } = parsedLog.args;

    console.log(`DepositRevealed event detected:
      FundingTxHash: ${fundingTxHash}
      FundingOutputIndex: ${fundingOutputIndex}
      Depositor: ${depositor}`);
      if (fundingTxHash)
        {
            try {
                const reqMint = await vault.requestOptimisticMint(fundingTxHash, fundingOutputIndex)
                await reqMint.wait();
                console.log("[+][+][+] request succesful [+][+][+]");
            }
            catch (error) {
                console.error(error);
            }
            await new Promise(r => setTimeout(r, 15000));
            try {
                const finMint = await vault.finalizeOptimisticMint(fundingTxHash, fundingOutputIndex)
                await finMint.wait();
                console.log("[+][+][+] finalize succesful [+][+][+]");
            }
            catch (error) {
                console.error(error);
            }
          }
  });
}

listenForDepositRevealed();

// To run: npx hardhat run scripts/minter.js --network goerli 