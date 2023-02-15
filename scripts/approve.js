const API_KEY = process.env.API_KEY;
const GOV_PRIVATE_KEY = "80f7dfd8a816220e08c0a8579e534e4fd79e348c440ced3024a232a9a8548130";

const Chaosnet = require("./RandomBeaconChaosnet.json");
const SortitionPool = require("./BeaconSortitionPool.json");
const { ethers } = require("hardhat");

const infuraProvider = new ethers.providers.InfuraProvider(network="goerli", API_KEY);
const signer = new ethers.Wallet(GOV_PRIVATE_KEY, infuraProvider);


const overrides = { gasLimit: 2000000 };

const chaosnet = new ethers.Contract(Chaosnet.address,Chaosnet.abi, signer);
const sortitionPool = new ethers.Contract(SortitionPool.address,SortitionPool.abi, signer);

const add = ["0x9c7b3e63d1d48c347e9d03d87b9181d7b2bf3bbf",
"0xB6B7D08BF34333f2a2B2219D52253B76a2865819",
"0x103Ca724C93cae752412f2Af8aA2f5e28fDE1120",
"0x875DAdf51Ca83f7E4b4186a78460A7B2d6439f6c"];

async function main2() {
    const authAmount = 41000;
    let authAmt = ethers.utils.parseUnits(authAmount.toString(), "ether");
    const step1 = await sortitionPool.addBetaOperators([add.address]);
    //*** uncomment the below line and comment above if the above does not work
    // const step1 = await chaosnet.addBetaOperators([ethers.utils.getAddress(add)]);
    await step1.wait();
    console.log("++++++++++++++step1++++++++++++")
    for(const i=0;i<4;i++){
    const step2 = await sortitionPool.insertOperator(add[i].address,authAmt);
    //*** uncomment the below line and comment above if the above does not work
    // const step2 = await sortitionPool.insertOperator(ethers.utils.getAddress(add[i]),authAmt);
    await step2.wait();
    console.log("++++++++++++++step2++++++++++++")};
}

main2();

// *** add the two contract json files in scripts folder before running
// To run: npx hardhat run scripts/approve.js --network goerli