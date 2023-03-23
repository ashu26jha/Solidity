const {network, ethers} = require("hardhat");
const { networkConfig, developmentChains } = require("../helper-hardhat-config")
const {verify} = require("../utils/verify");
const {storeImages, storeTokenUriMetadata} = require("../utils/uploadToPinata");
const { Token } = require("nft.storage");

const imagesLocation = "./images/randomNft"

const metaData = {
    name : "",
    description: "",
    image: "",
    attributes: [
        {
            trait_type:"Cuteness",
            value: 100,
        },
    ],

}

const FUND_AMOUNT = "1000000000000000000000";

let tokenUris = [
    'ipfs://QmNddFsneWThscVTyaTPWoiYAe5X462TSq27Bg2NX6HeWh',
    'ipfs://QmNqYUNjjRDXU4KN1cLA5pUgJ3V4cEVR7VWwDtCh8Awwue',
    'ipfs://Qme7UtrSEuizrnR2wjf2wCmh7YradDvsFicn5ozMrxzc6M'
];

module.exports = async function ({getNamedAccounts,deployments}){
    const {deploy , log } = deployments;
    const {deployer} = await getNamedAccounts();
    const chainId = network.config.chainId;

    let vrfCoordinatorV2Address, subscriptionId;

    if(process.env.UPLOAD_TO_PINATA == "true"){
        tokenUris = await handleTokenUris();

    }
    let VRFCoordinatorV2Mock;
    if(developmentChains.includes(network.name)){
        VRFCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock")
        vrfCoordinatorV2Address = VRFCoordinatorV2Mock.address;
        const tx = await VRFCoordinatorV2Mock.createSubscription();
        const txReceipt = await tx.wait(1);
        subscriptionId = txReceipt.events[0].args.subId;
        
    
        await VRFCoordinatorV2Mock.fundSubscription(subscriptionId,FUND_AMOUNT);
    }
    else{
        vrfCoordinatorV2Address = networkConfig[chainId].vrfCoordinatorV2;
        subscriptionId = networkConfig[chainId].subscriptionId
    }

    

    const arguments = [
        vrfCoordinatorV2Address,
        subscriptionId,
        networkConfig[chainId].gasLane,
        networkConfig[chainId].mintFee,
        networkConfig[chainId].callbackGasLimit,
        tokenUris,
    ];
    // console.log(deployer);
    const RandomIpfsNft = await deploy ("RandomIpfsNft" , {
        from: deployer,
        args: arguments,
        log: true,
        waitConfirmations: 1,
    }) ;

    await VRFCoordinatorV2Mock.addConsumer(
        subscriptionId,
        RandomIpfsNft.address
    )


    
    if(!developmentChains.includes (network.name) && process.env.ETHERSCAN_API_KEY){
        log("Verifying");
        await verify (RandomIpfsNft.address,arguments)
    }
}

async function handleTokenUris(){
    tokenUris = [];
    const {responses : imageUploadResponses , files} = await storeImages(imagesLocation);
    
    for(imageUploadResponsesIndex in imageUploadResponses ){
    
        let tokenUriMetadata = {... metaData};
        tokenUriMetadata.name = files[imageUploadResponsesIndex].replace(".png","");
        tokenUriMetadata.description = `An adorable ${tokenUriMetadata.name}`;
        tokenUriMetadata.image = `ipfs://${imageUploadResponses[imageUploadResponsesIndex].IpfsHash}`;
        console.log(`Uploading ${tokenUriMetadata.name}`);

        const metaDataResponse = await storeTokenUriMetadata(tokenUriMetadata);
        tokenUris.push(`ipfs://${metaDataResponse.IpfsHash}`);
    }   
    
    console.log("TOKEN URIS UPLOADED THEY ARE");
    console.log(tokenUris);

    return tokenUris;

}

module.exports.tags = ["all","randomipfs","main"];
