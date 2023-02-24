## Initialising project
`yarn add --dev hardhat`
`yarn hardhat`
### Installing dependencies
`yarn add --dev @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers @nomiclabs/hardhat-etherscan @nomiclabs/hardhat-waffle chai ethereum-waffle hardhat hardhat-contract-sizer hardhat-deploy hardhat-gas-reporter prettier prettier-plugin-solidity solhint solidity-coverage dotenv`

Create a new folder contracts in that we will create our .sol files

Best way is to write the test and deploy scripts simultaneously

When to use mocks????
When we interact any contract outside of our system then we have to deploy mocks
