const { network, ethers } = require("hardhat");
const { developmentChains, networkConfig } = require("../helper-hardhat-config");
const { verify } = require("../helper-hardhat-config");
const FUND_AMOUNT = ethers.utils.parseEther("1");

module.exports = async function ({getNamedAccounts,deployments}){
    
    const {deploy,log} = deployments;
    const {deployer} = await getNamedAccounts();
    const chainId = network.config.chainId;

    let vrfCoordinatorV2Address, subscriptionId;
    const entranceFee = networkConfig[chainId]["entranceFee"];
    const gasLane = networkConfig[chainId]["gasLane"];
    const callbackGasLimit = networkConfig[chainId]["callbackGasLimit"];
    const interval = networkConfig[chainId]["interval"];
    // console.log(entranceFee.toString());
    // console.log("********************F************");
    if(developmentChains.includes(network.name)){
        const VRFCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock");
        vrfCoordinatorV2Address = VRFCoordinatorV2Mock.address;
        const transactionResponse = await VRFCoordinatorV2Mock.createSubscription();
        const transactionReceipt = await transactionResponse.wait(1);
        
        subscriptionId = transactionReceipt.events[0].args.subId
        console.log(subscriptionId);
        await VRFCoordinatorV2Mock.fundSubscription(subscriptionId, FUND_AMOUNT)
        console.log("********************F************");
    }
    else{
        vrfCoordinatorV2Address = networkConfig[chainId]["vrfCoordinatorV2"];
        subscriptionId = networkConfig[chainId]["subscriptionId"];
    }
    
    const args = [vrfCoordinatorV2Address,entranceFee,gasLane,subscriptionId,callbackGasLimit,interval];
    
    console.log("*********************************");
    const raffle = await deploy("Raffle",{
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })

    if(!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY){
        log("Verifying");
        await verify (raffle.address,args);
    }
}

module.exports.tags = ["all","raffle"];
