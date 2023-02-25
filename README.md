A contract is a collection of functions and data that resides at a specific address on a ethereum blockchain

`msg.sender` is the address from where the call came from. Just like in other languages the constructor can only be called once.
Inside the constructor we can use `msg.sender` to get address of contract creator

### Transactions:
If you want to change the state of blockchain you need to make a transaction which has to be verified by others and signed by the creator. 1 ETH = 10^18 WEI.

A smart contract is created when send a transaction but it does not have a target account. Every transaction send Ether and binary data also known as input data.

Originator of the transaction pays the gas. It is basically the cost of conducting the transactions paid to validators.

One should try not to deal with more than one transaction in a single go.

Message signing is proving that you have access to that address. Signing a message with a private key does not require interacting with the Ethereum network.

### Byte Code & ABI
ABI stands for Application Binary Interface it is used to communicate between accounts and smart contracts. Also between smart contracts and smart contracts. Think of this just like a smart contract.

Byte Code is deployed on Ethereum Virtual Machine. It is a JSON file. OPcode has those instructions

### Logs
Geneerally used by events in solidity. Contracts cannot access log data after it has been created, but they can be efficiently accessed from outside the blockchain.

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

