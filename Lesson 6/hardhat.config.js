require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
const goerliRpcURL = process.env.GOERLI_RPC_URL;
const privateKey = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

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


  
};
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
