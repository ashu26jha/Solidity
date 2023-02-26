A contract is a collection of functions and data that resides at a specific address on a ethereum blockchain

### Transactions:
If you want to change the state of blockchain you need to make a transaction which has to be verified by others and signed by the creator. 1 ETH = 10^18 WEI.

A smart contract is created when send a transaction but it does not have a target account. Every transaction send Ether and binary data also known as input data.

Originator of the transaction pays the gas. It is basically the cost of conducting the transactions paid to validators.

One should try not to deal with more than one transaction in a single go.

Message signing is proving that you have access to that address. Signing a message with a private key does not require interacting with the Ethereum network.

`msg.sender` is the address from where the call came from. Just like in other languages the constructor can only be called once.
Inside the constructor we can use `msg.sender` to get address of contract creator

### Byte Code & ABI
ABI stands for Application Binary Interface it is used to communicate between accounts and smart contracts. Also between smart contracts and smart contracts. Think of this just like a smart contract.

Byte Code is deployed on Ethereum Virtual Machine. It is a JSON file. OPcode has those instructions

### Logs
Generally used by events in solidity. Contracts cannot access log data after it has been created, but they can be efficiently accessed from outside the blockchain.

`require(condition,explaination)` for example `require(msg.sender == owner,"Only owner")` If require is failed the state is reverted and all the unused gas is sent back. 

### Sending Ether

We can send ether ether to address by using
1. `transfer` Not used now `address.transfer(msg.value)`. Transfer 2300 gas and throws an error
2. `send` Not used now `bool sent = address.send(msg.value)`. Transfer 2300 gas and returns a boolean
3. `call` Widely used now `(bool sent, bytes memory data) = _to.call{value: msg.value}("");` It can also be used to deal with   functions of other contracts 

### Useful Stuff 

`block.timestamp` tell the current time of block

`payable` Mark an address payable if you want that address some ETH or funds

`payable_Address.send(amount)` It is used to send ETH, this 

`this` refers to the current contract. `address(this).balance` will give balance of contract.

## Understanding Hardhat Deploy 

Firstly we deploy the mocks. `module.exports = async ({ getNamedAccounts, deployments }) => { }`. We extract `getNamedAccounts` and `deployments` from the `hre` also known as Hardhat Runtime environment. 

### NamedAccounts


`await getNamedAccounts()` function retrieves `namedAccounts` from `hardhat.config.js`. This function will return deployer and player

```
namedAccounts: {
    deployer: {
        default: 0, // If you run yarn hardhat node you will get this as account[0]
        1: 0, 
    },
    player: {
        default: 1, // // If you run yarn hardhat node you will get this as account[1]
    },
}
```

For retrieving chainId `const chainId = network.config.chainId` for this you need to import network from hardhat

### Deployments

We extract `deploy` function from `deployments` by `const {deploy} = deployments`. To deploy the contract you need args as arguments passed through the contructor of `.sol` file.

```
await deploy("Name_Of_Contract", {
    from: deployer,
    log: true,
    args: [],
})
```

### Interacting with deployed contract

Once the contract is deployed we can interact with `const contract = await ethers.getContract("Name_Of_Contract")`. For interacting we the contract variable. Now the `contract` has everything such as its `functions`, `address`, `deployer`. Calling a function changes state variable so its a transaction. To interact with a function `contract.functionName()`. Now we wait for transaction to go through so wait 1 block confirmations.
```
const transactionResponse = await contract.createSubscription()
const transactionReceipt = await transactionResponse.wait(1)
```
The `transactionReceipt` has all the return properties and this event logs
