

const API_KEY = process.env.API_KEY;
const GOV_PRIVATE_KEY = process.env.PRIVATE_KEY;
const { ethers } = require("hardhat");



const infuraProvider = new ethers.providers.InfuraProvider(network="goerli", API_KEY);
const signer = new ethers.Wallet(GOV_PRIVATE_KEY, infuraProvider);
var web3 = require('web3');

const overrides = {gasLimit: 2000000  };


const rbg = require("./RandomBeaconGovernance.json");
const { logger } = require('ethers');


const RandomBeaconG = new ethers.Contract(rbg.address,rbg.abi, signer);




async function main() {

    const authAmount = 41000;
    // console.log("++")
    let authAmt = ethers.utils.parseUnits(authAmount.toString(), "ether");
    
        
    tx = await RandomBeaconG.setRequesterAuthorization(ethers.utils.getAddress("0xA7C46d7dE9ddC51289e6BbD1a94E298b3330FACD"),{},true,overrides)
    // ([ethers.utils.getAddress(add[5])]);
    await tx.wait();
}
main()
// import { BytesLike } from "ethers"
// export const ecdsaWalletTestData = {
//     // private key
// // Bitcoin's HASH160 of compressedPublicKey i.e. RIPEMD160(SHA256(compressedPublicKey))
// pubKeyHash160: <BytesLike>"0xf54a5851e9372b87810a8e60cdd2e7cfd80b6e31"}