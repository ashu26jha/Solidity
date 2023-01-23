require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("./tasks/block-number");
require("hardhat-gas-reporter");

const goerliRpcURL = process.env.GOERLI_RPC_URL;
const privateKey = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const COINMARKETCAP_API = process.env.COINMARKETCAP_API;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks :{
    goerli :{
      url: goerliRpcURL,
      accounts : [privateKey],
      chainId : 5,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas.txt",
    currency: "USD",
    cointmarketcap :COINMARKETCAP_API,
    noColors: true,
  }
};
