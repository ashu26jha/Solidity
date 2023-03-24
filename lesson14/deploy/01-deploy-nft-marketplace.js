const { network } = require("hardhat")
// const { developmentChains } = require("../helper-hardhat-config")
console.log("LOL");
const { verify } = require("../utils/verify")

module.exports = async ({ getNamedAccounts, deployments }) => {
    
    console.log("LOL");
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const waitBlockConfirmations = 1

    log("----------------------------------------------------")
    const arguments = []
    const nftMarketplace = await deploy("NftMarketplace", {
        from: deployer,
        args: arguments,
        log: true,
        waitConfirmations: waitBlockConfirmations,
    })

    // Verify the deployment
    if (network.name != "hardhat" && process.env.ETHERSCAN_API_KEY) {
        log("Verifying...")
        await verify(basicNft.address, args)
    }
    log("----------------------------------------------------")
}

module.exports.tags = ["all", "nftmarketplace"]
