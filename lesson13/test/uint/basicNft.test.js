const { assert, expect } = require("chai")
const { network, deployments, ethers } = require("hardhat")
const { developmentChains, networkConfig } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name)
    ? describe.skip : describe ("Basic Nft Test", async function (){
        let basicNFT ;
        beforeEach( async () => {
            accounts = await ethers.getSigners();
            deployer = accounts[0];
            await deployments.fixture(["basicnft"]);
            basicNFT = await ethers.getContract("BasicNft")
            console.log(await basicNFT.name());
        });

        // Checking the constructor !!
        describe ("constructor" , async function () {
            it("Initialise the constructor correctly", async function(){
                const counterFromContract = await basicNFT.getTokenCounter();
                // const name
                assert.equal(counterFromContract,0);
            })
        });

        describe ("checks MINT NFT function", async function () {
            beforeEach(async () => {
                const txResponse = await basicNFT._mintNft()
                await txResponse.wait(1)
            })
            it("Allows users to mint an NFT, and updates appropriately", async function () {
                const tokenURI = await basicNFT.tokenURI(0)
                const tokenCounter = await basicNFT.getTokenCounter()
  
                assert.equal(tokenCounter.toString(), "1")
                assert.equal(tokenURI, await basicNFT.TOKEN_URI())
            })
            it("Show the correct balance and owner of an NFT", async function () {
                const deployerAddress = deployer.address;
                const deployerBalance = await basicNFT.balanceOf(deployerAddress)
                const owner = await basicNFT.ownerOf("0")
  
                assert.equal(deployerBalance.toString(), "1")
                assert.equal(owner, deployerAddress)
            })
            // it("Increaments the token counter",async function (){
            //     const txResponse =await basicNFT._mintNft();
            //     await txResponse.wait(1)
            //     const counterFromContract = await basicNFT.getTokenCounter();
            //     assert.equal(counterFromContract,1);
            // })
            // it("Show the correct balance and owner of an NFT", async function () {
            //     const deployerAddress = deployer.address;
            //     const deployerBalance = await basicNFT.balanceOf(deployerAddress)

            //     // const owner = await basicNFT._ownerOf(0)
  
            //     assert.equal(deployerBalance.toString(), "1")
            //     // assert.equal(owner, deployerAddress)
            // })
        })
    })
