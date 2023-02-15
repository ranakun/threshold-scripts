const API_KEY = process.env.API_KEY;

// staking provider Private Key
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const T_token = require("./T.json")
const Beacon = require("./RandomBeacon.json")
const T_Staking = require("./TokenStaking.json")
const ECDSA = require("./WalletRegistry.json");
const { ethers } = require("hardhat");

const infuraProvider = new ethers.providers.InfuraProvider(network="goerli", API_KEY);
const signer = new ethers.Wallet(PRIVATE_KEY, infuraProvider);

//adresses
const stakingProvider = "0xd5b0a91e1Ab74F0c20b00BD070ef333B36F5B06d";
const beneficiary = stakingProvider;
const authorizer = stakingProvider;
const operator = "0x875DAdf51Ca83f7E4b4186a78460A7B2d6439f6c";

// const stakingProvider1 = "0xA65Bf47514e3e6CE8E461315cEd6Ae1eaab2F0D0";
// const beneficiary1 = "0xA65Bf47514e3e6CE8E461315cEd6Ae1eaab2F0D0";
// const authorizer1 = "0xA65Bf47514e3e6CE8E461315cEd6Ae1eaab2F0D0";

const overrides = { gasLimit: 2000000 };

//contract instances
const T = new ethers.Contract(T_token.address,T_token.abi, signer);
const randomBeacon = new ethers.Contract(Beacon.address,Beacon.abi, signer);
const staking = new ethers.Contract(T_Staking.address,T_Staking.abi, signer);
const tbtc = new ethers.Contract(ECDSA.address,ECDSA.abi, signer);


// staking.on("AuthorizationIncreased", (stakingProvider, application, fromAmount, authorized) => {
//     console.log("AuthorizationIncreased event: ", {
//         stakingProvider,
//         application,
//         fromAmount: fromAmount.toString(),
//         authorized: authorized.toString()
//     });
// })


async function main() {
    console.log("Starting");
    // stake
    const stakeAmount = 100000;
    let stakeAmt = ethers.utils.parseUnits(stakeAmount.toString(), "ether");
    
    const step0 = await T.approve(staking.address,stakeAmt,overrides);
    await step0.wait();
    console.log("++++++++++++++step0++++++++++++");
    const step1 = await staking.stake(stakingProvider,beneficiary,authorizer,stakeAmt,overrides);
    await step1.wait();
    console.log("++++++++++++++step1++++++++++++");

    // //topUp
    // const topUpAmount = 1000000;
    // let topUpAmt = ethers.utils.parseUnits(topUpAmount.toString(), "ether");
    // const step0 = await T.approve(staking.address,topUpAmt,overrides);
    // await step0.wait();
    // console.log("++++++++++++++step0++++++++++++");
    // const step1 = await staking.topUp(stakingProvider1,topUpAmt,overrides);
    // await step1.wait();
    // console.log("++++++++++++++step1++++++++++++");

    const authAmount = 41000;
    let authAmt = ethers.utils.parseUnits(authAmount.toString(), "ether");

    try{const step2a = await staking.increaseAuthorization(stakingProvider1,ECDSA.address,authAmt,overrides);
    await step2a.wait();}
    catch(error){
        console.error(error);
    }
    console.log("++++++++++++++step2a++++++++++++");
    try{const step2b = await staking.increaseAuthorization(stakingProvider1,Beacon.address,authAmt,overrides);
    await step2b.wait();}
    catch(error){
        console.error(error);
    }
    console.log("++++++++++++++step2b++++++++++++");
    try{const step3a = await randomBeacon.registerOperator(operator,overrides);
    await step3a.wait();}
    catch(error){
        console.error(error);
    }
    console.log("++++++++++++++step3a++++++++++++")
    try{const step3b = await tbtc.registerOperator(operator,overrides);
    await step3b.wait();
    console.log(step3b);}
    catch(error){
        console.error(error);
    }
    console.log("++++++++++++++step3b++++++++++++");
}

main();

// To run: npx hardhat run scripts/interact.js --network goerli 