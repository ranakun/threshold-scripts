// const API_KEY = process.env.API_KEY;
// const PRIVATE_KEY = "80f7dfd8a816220e08c0a8579e534e4fd79e348c440ced3024a232a9a8548130";

// // const T_token = require("./T.json")
// const Beacon = require("./RandomBeacon.json")
// const T_Staking = require("./TokenStaking.json")
// const ECDSA = require("./WalletRegistry.json");
// const { ethers } = require("hardhat");

// const infuraProvider = new ethers.providers.InfuraProvider(network="goerli", API_KEY);
// const signer = new ethers.Wallet(PRIVATE_KEY, infuraProvider);

// //adresses
// const governance = "0xcAacA2814ca7F2d0B2381F3ab4CC0580f0367849"

// const overrides = { gasLimit: 2000000 };

// //contract instances
// // const T = new ethers.Contract(T_token.address,T_token.abi, signer);
// const randomBeacon = new ethers.Contract(Beacon.address,Beacon.abi, signer);
// const staking = new ethers.Contract(T_Staking.address,T_Staking.abi, signer);
// const tbtc = new ethers.Contract(ECDSA.address,ECDSA.abi, signer);


// async function main2() {
//     const step1 = await staking.approveApplication(tbtc.address);
//     await step1.wait();
//     console.log("++++++++++++++step1++++++++++++")
//     const step2 = await staking.approveApplication(randomBeacon.address);
//     await step2.wait();
//     console.log("++++++++++++++step2++++++++++++")
// }

// main2();
