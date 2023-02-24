const { ethers } = require("hardhat");

const networkConfig = {
    5: {
        name: "goerli",
        vrfCoordinatorV2: "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D",
        raffleEntranceFee: ethers.utils.parseEther("0.01"),
        gasLane: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
        subscriptionId: "10153",
        callbackGasLimit: "5000000",
        keepersUpdateInterval: "30",
    },
    31337: {
        name: "hardhat",
        raffleEntranceFee: ethers.utils.parseEther("0.01"),
        gasLane: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
        callbackGasLimit: "5000000",
        keepersUpdateInterval: "30",
    }, 

};
const developmentChains = ["hardhat","localhost"];

module.exports = {
    networkConfig,
    developmentChains
};
