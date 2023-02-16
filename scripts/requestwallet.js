const API_KEY = process.env.API_KEY;
const GOV_PRIVATE_KEY = "80f7dfd8a816220e08c0a8579e534e4fd79e348c440ced3024a232a9a8548130";

const infuraProvider = new ethers.providers.InfuraProvider(network="goerli", API_KEY);
const signer = new ethers.Wallet(GOV_PRIVATE_KEY, infuraProvider);


const overrides = { gasLimit: 2000000 };


const bridge = require("./WalletRegistry.json");

const Bridge = new ethers.Contract(bridge.address,bridge.abi, signer);


async function main() {

    const authAmount = 41000;
    // console.log("++")
    let authAmt = ethers.utils.parseUnits(authAmount.toString(), "ether");
    
    const step1 = await Bridge.requestNewWallet(overrides)
    // const step1 = await Bridge.governance()
    // ([ethers.utils.getAddress(add[5])]);
    await step1.wait();
   
}
main()