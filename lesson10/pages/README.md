`yarn create next-app .`
`yarn run dev` to run on localhost 3000

For Moralis to work you to wrap entire app into Moralis Provider

`const {enableWeb3, account} = useMoralis();` Use enableWeb3() to connect to metamask `async () => {await enableWeb3() }`
We saved it in local storage variable so that we can keep track 

To interact with the contract via react-moralis
