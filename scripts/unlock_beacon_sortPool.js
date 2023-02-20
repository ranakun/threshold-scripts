const API_KEY = process.env.API_KEY;
const GOV_PRIVATE_KEY = process.env.PRIVATE_KEY;

const SortitionPool = require("./BeaconSortitionPool.json");

const { ethers } = require("hardhat");

const infuraProvider = new ethers.providers.InfuraProvider(network="goerli", API_KEY);
const signer = new ethers.Wallet(GOV_PRIVATE_KEY, infuraProvider);

const sortitionPool = new ethers.Contract(SortitionPool.address, SortitionPool.abi, signer);

async function main2() {
    const authAmount = 41000;
    let authAmt = ethers.utils.parseUnits(authAmount.toString(), "ether");

    const step1 = await sortitionPool.unlock({ gasLimit: 2000000});
    await step1.wait();
   
    console.log("++++++++++++++done++++++++++++")
}

main2();
