const API_KEY = process.env.API_KEY;
const GOV_PRIVATE_KEY = process.env.PRIVATE_KEY;

const Chaosnet = require("./RandomBeaconChaosnet.json");
const SortitionPool = require("./BeaconSortitionPool.json");
const rb = require("./RandomBeacon.json");
const { ethers } = require("hardhat");

const infuraProvider = new ethers.providers.InfuraProvider(network="goerli", API_KEY);
const signer = new ethers.Wallet(GOV_PRIVATE_KEY, infuraProvider);
// const signer = new ethers.getSigner(randomBeacon.address);

const overrides = { gasLimit: 2000000 };

const chaosnet = new ethers.Contract(Chaosnet.address,Chaosnet.abi, signer);
const sortitionPool = new ethers.Contract(SortitionPool.address,SortitionPool.abi, signer);
const randomBeacon = new ethers.Contract(rb.address,rb.abi, signer);

// const add = ["0x9c7b3e63d1d48c347e9d03d87b9181d7b2bf3bbf", //Prashanth
// "0xB6B7D08BF34333f2a2B2219D52253B76a2865819",
// "0x103Ca724C93cae752412f2Af8aA2f5e28fDE1120",
// "0x875DAdf51Ca83f7E4b4186a78460A7B2d6439f6c", //Aasif windows
// "0x4FEfd9263102505fA2b5467fb12bb1EafB7AdA8f", //Aasif 2
// "0xC37C0CB824d5afB99c4A396AD39e43518CC9A306"]; //Pratiksha

const add = ["0x9c7b3e63d1d48c347e9d03d87b9181d7b2bf3bbf",
"0xC37C0CB824d5afB99c4A396AD39e43518CC9A306",
"0xB6B7D08BF34333f2a2B2219D52253B76a2865819",
"0x103Ca724C93cae752412f2Af8aA2f5e28fDE1120",
]

async function main2() {
    const authAmount = 41000;
    // console.log("++")
    let authAmt = ethers.utils.parseUnits(authAmount.toString(), "ether");
    // console.log("++")
    // var arrayLength = add.length;
    // for (var i = 0; i < arrayLength; i++) {
    //     // console.log(add[i].address)
    //     // const step1 = await sortitionPool.addBetaOperators([add[i].address]);
    //     console.log([ethers.utils.getAddress(add[i])])
    //     //*** uncomment the below line and comment above if the above does not work
    //     const step1 = await sortitionPool.addBetaOperators([ethers.utils.getAddress(add[i])],overrides);
    //     await step1.wait();
    //     //Do something
    // }
    const step1 = await sortitionPool.addBetaOperators([ethers.utils.getAddress(add[0])],overrides);
    await step1.wait();
   
    console.log("++++++++++++++step1++++++++++++")
    // for(var i=0;i<4;i++){
    // // const step2 = await sortitionPool.insertOperator(add[i].address,authAmt);
    // //*** uncomment the below line and comment above if the above does not work
    // try{
    // const step2 = await sortitionPool.insertOperator(ethers.utils.getAddress(add[i]),authAmt,overrides);
    // await step2.wait();}
    // catch(error){
    //     console.error(error);
    // }
    // console.log("++++++++++++++step2++++++++++++");}
    // const step1 = await randomBeacon.registerOperator(ethers.utils.getAddress("0x103Ca724C93cae752412f2Af8aA2f5e28fDE1120"),overrides);
    // await step1.wait();
    
    // const step2 = await randomBeacon.joinSortitionPool(overrides);
    // await step2.wait();
}

main2();

// *** add the two contract json files in scripts folder before running
// To run: npx hardhat run scripts/approve.js --network goerli