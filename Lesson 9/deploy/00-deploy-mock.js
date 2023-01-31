const { network } = require("hardhat");
const {developmentChains} = require("../helper-hardhat-config");

const BASE_FEE = ethers.utils.parseEther("0.25");
const GAS_PRICE_LINK = 1e9;

module.exports = async function ({getNamedAccounts,deployments}){
    const {deploy,log} = deployments;
    const {deployer} = await getNamedAccounts();
    // const args = 
    // if(network == undefined){
    //     console.log("Netw")
    // }

    if(developmentChains.includes(network.name)){
        log("Local network detected! Deploying mocks");
        // Deploy a mock VRFCoordinator
        await deploy ("VRFCoordinatorV2Mock" ,{
            from: deployer,
            log: true,
            args: [BASE_FEE,GAS_PRICE_LINK],
        })
        log("MOCKS DEPLOYED");
        log("-----------------------------------")
    }
}
module.exports.tags = ["all","mocks"];
