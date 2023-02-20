const API_KEY = process.env.API_KEY;
const GOV_PRIVATE_KEY = process.env.PRIVATE_KEY;
const { ethers } = require("hardhat");

const infuraProvider = new ethers.providers.InfuraProvider(network="goerli", API_KEY);
const signer = new ethers.Wallet(GOV_PRIVATE_KEY, infuraProvider);
var web3 = require('web3');

const overrides = {gasLimit: 2000000  };


const bridge = require("./Bridge.json");
const { logger } = require('ethers');

const Bridge = new ethers.Contract(bridge.address,bridge.abi, signer);


async function main() {

    const authAmount = 41000;
    // console.log("++")
    let authAmt = ethers.utils.parseUnits(authAmount.toString(), "ether");
    
    // const step1 = await Bridge.requestNewWallet(web3.utils.hexToAscii(0x0000000000000000000000000000000000000000000000000000000000000000),0,0)
    // const step1 = await Bridge.governance()
    var activeWalletMainUtxo = {
        txHash:
          "0x0000000000000000000000000000000000000000000000000000000000000000",
        txOutputIndex: 0,
        txOutputValue: 0,
      }
    console.log(Bridge.address,activeWalletMainUtxo)
    tx = await Bridge.requestNewWallet(activeWalletMainUtxo,overrides)
    // ([ethers.utils.getAddress(add[5])]);
    await tx.wait();
   
}
main()
// import { BytesLike } from "ethers"
// export const ecdsaWalletTestData = {
//     // private key
// // Bitcoin's HASH160 of compressedPublicKey i.e. RIPEMD160(SHA256(compressedPublicKey))
// pubKeyHash160: <BytesLike>"0xf54a5851e9372b87810a8e60cdd2e7cfd80b6e31"}