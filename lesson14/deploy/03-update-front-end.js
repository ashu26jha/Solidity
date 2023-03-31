const FRONT_END_ABI_LOCATION_NFTMARKETPLACE = "../lesson16/constants/NftMarketplace.json";
const FRONT_END_ABI_LOCATION_BASICNFT = "../lesson16/constants/BasicNft.json";
const FRONT_END_CONTRACTS_FILE = "../lesson16/constants/networkMapping.json";

require("dotenv").config()
const fs = require("fs")
const { ethers } = require("hardhat")

module.exports = async () => {
    
    if (process.env.UPDATE_FRONT_END) {
        console.log("Writing to front end...")
        // await updateContractAddresses()
        await updateAbi()
        await updateAddress()
        console.log("Front end written!")
    }
}

async function updateAbi (){
    const NftMarketplace = await ethers.getContract("NftMarketplace");
    fs.writeFileSync(FRONT_END_ABI_LOCATION_NFTMARKETPLACE, NftMarketplace.interface.format(ethers.utils.FormatTypes.json))
}

async function updateAddress(){
    const nftMarketplace = await ethers.getContract("NftMarketplace");
    const chainId = network.config.chainId.toString()
    const contractAddresses = JSON.parse(fs.readFileSync(FRONT_END_CONTRACTS_FILE, "utf8"))
    if (chainId in contractAddresses) {
        if (!contractAddresses[chainId]["NftMarketplace"].includes(nftMarketplace.address)) {
            contractAddresses[chainId]["NftMarketplace"].push(nftMarketplace.address)
        }
    } else {
        contractAddresses[chainId] = { NftMarketplace: [nftMarketplace.address] }
    }
    fs.writeFileSync(FRONT_END_CONTRACTS_FILE, JSON.stringify(contractAddresses))
}


module.exports.tags = ["all", "frontend"]
