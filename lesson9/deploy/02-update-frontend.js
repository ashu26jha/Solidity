const {ethers, network} = require("hardhat");
const fs = require("fs");

const FRONT_END_ADDRESS_FILE = "../lesson10/constants/front-end.json";
const ABI_FILE = "../lesson10/constants/abi.json";

module.exports = async function () {
    console.log("Hello")
    console.log(process.env.UPDATE_FRONTEND);
    if(process.env.UPDATE_FRONTEND == "true"){
        console.log("Updating front-end");
        updateAddressContract();
        updateABI()
    }
}

async function updateABI(){
    const raffle = await ethers.getContract("Raffle");
    console.log("Writing ABI into the file ::: ")
    fs.writeFileSync(ABI_FILE,raffle.interface.format(ethers.utils.FormatTypes.json));
}

async function updateAddressContract () {
    const raffle = await ethers.getContract("Raffle");
    const currentAddress = JSON.parse(fs.readFileSync(FRONT_END_ADDRESS_FILE,"utf-8"));
    const chainId = network.config.chainId;
    if(chainId in currentAddress){
        if(!currentAddress[chainId].includes(raffle.address)){
            currentAddress[chainId].push(raffle.address);
        }
    }
    else{
        currentAddress[chainId] = [raffle.address];
    }
    fs.writeFileSync(FRONT_END_ADDRESS_FILE,JSON.stringify(currentAddress));
    console.log("Address written ");
}

module.exports.tags = ["all","frontend"];
