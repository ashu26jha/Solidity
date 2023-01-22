const {ethers , run, network } = require("hardhat");


async function main (){
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying contract");
  const SimpleStorage = await SimpleStorageFactory.deploy();
  await SimpleStorage.deployed();
  console.log(`Deployed contract to: ${SimpleStorage.address}`);
  if(network.chainId === 5 && process.env.ETHERSCAN_API_KEY){
    await SimpleStorage.wait(6);
    await verify(SimpleStorage,[]);
  }

  const currentValue = await SimpleStorage.retrieve();
  console.log(`Current value : ${currentValue}`);

  const transactionResponsse = await SimpleStorage.store(7);
  await transactionResponsse.wait(1);
  const update = await SimpleStorage.retrieve();
  console.log(`Updated value: ${update.toString()}`);
}

async function verify (contactAddress , args){
  console.log("Verifying Package");
  try{
    await run("verify:verify",{
      address: contactAddress,
      constructorArguments: args,
    });
  }
  catch(e){
    console.log(e);
  }

}

main()
  .then(()=> process.exit(0))
  .catch((error)=>{
    console.error(error);
    process.exit(1);
  });
