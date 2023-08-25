const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const contractName = require("./contractName.json");

const { ethers } = require("hardhat");

const infuraProvider = new ethers.providers.InfuraProvider(
  (network = "goerli"),
  API_KEY
);
const signer = new ethers.Wallet(PRIVATE_KEY, infuraProvider);
const contract = new ethers.Contract(contractName.address, contractName.abi, signer);

async function listenForEvents() {
  // Set up the event filter and listener
  const filter = contract.filters.EventName();
  infuraProvider.on(filter, async (log) => {
    const parsedLog = contract.interface.parseLog(log);
    const {
      argument1,
      argument2,
      argument3,
    } = parsedLog.args;

    console.log(`Event detected:
      Argument1: ${argument1}
      Argument2: ${argument2}
      Argument3: ${argument3}`);
      if (fundingTxHash)
        {
            try {
                const req1 = await contract.func1(argument1)
                await req1.wait();
                console.log("[+][+][+] request succesful [+][+][+]", req1);
            }
            catch (error) {
                console.error(error);
            }
            await new Promise(r => setTimeout(r, 60000));
            try {
                const req2 = await contract.func2(argument2)
                await req2.wait();
                console.log("[+][+][+] request succesful [+][+][+]", req2);
            }
            catch (error) {
                console.error(error);
            }
          }
  });
}

listenForEvents();

// To run: npx hardhat run scripts/demo.js --network goerli 