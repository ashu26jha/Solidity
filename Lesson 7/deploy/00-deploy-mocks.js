const { network, ethers } = require("hardhat");
const {developmentChains,DECIMALS,INITIAL_ANSWER} = require("../helper-hardhat");
module.exports = async (hre)=>{
    const {getNamedAccounts,deployments} = hre;
    const {deploy,log} = deployments;
    const {deployer} = await getNamedAccounts();
    const chainId = network.config.chainId;
    const a =await ethers.getSigners()
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!",a[8]);
    if(developmentChains.includes(network.name)){
        log("Deploying mocks");
        console.log("DEPLOYMENT IS ",deployments)
        await deploy("MockV3Aggregator",{
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS,INITIAL_ANSWER],
        })
        log("Mocks deployed!! ");
        log("-------------------------------");
    }   
}
module.exports.tags = ["all","mocks"];
