 const API_KEY = process.env.API_KEY;
// const GOV_PRIVATE_KEY = "80f7dfd8a816220e08c0a8579e534e4fd79e348c440ced3024a232a9a8548130";
// PRIVATE_KEY1 = "58b78ca613b95acbeb87eee2a51e9de5370499ba5acdbbd58367519f7a361cd3";
const PRIVATE_KEY = "282e87d869dc2a767b8c0ac4c4829a1437e4bef4d69bb2c5e072b9111c1149fc";

// const T_token = require("./T.json")
const Beacon = require("./RandomBeacon.json");
const T_Staking = require("./TokenStaking.json");
const ECDSA = require("./WalletRegistry.json");
const { ethers } = require("hardhat");

const infuraProvider = new ethers.providers.InfuraProvider(network="goerli", API_KEY);
const signer = new ethers.Wallet(PRIVATE_KEY, infuraProvider);

// adresses
const stakingProvider = "0xd5b0a91e1Ab74F0c20b00BD070ef333B36F5B06d";
const overrides = { gasLimit: 2000000 };

// contract instances
// const T = new ethers.Contract(T_token.address,T_token.abi, signer);
const randomBeacon = new ethers.Contract(Beacon.address,Beacon.abi, signer);
const staking = new ethers.Contract(T_Staking.address,T_Staking.abi, signer);
const tbtc = new ethers.Contract(ECDSA.address,ECDSA.abi, signer);


async function main2() {
    // const step1 = await staking.getApplicationsLength();
    // console.log(step1);
    // // await step1.wait();
    // console.log("++++++++++++++step1++++++++++++");
    const step2 = await infuraProvider.getCode("0x1F79DF9ee0cfA4E99B5ea1052E54901Eb4b32692");
    console.log(step2);
    console.log("++++++++++++++step2++++++++++++");

}

main2();
