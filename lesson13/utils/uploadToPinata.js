const pinataSDK = require("@pinata/sdk");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const pinataAPIkey = process.env.PINATA_API_KEY;
const pinataAPIsecret = process.env.PINATA_API_SECRET;
const pinata = new pinataSDK (pinataAPIkey,pinataAPIsecret);

async function storeImages(imagesFilePath){
    const fullImagesPath = path.resolve(imagesFilePath);
    const files = fs.readdirSync(fullImagesPath);
    // console.log(files);
    let responses = [];
    console.log("Uploading to IPFS");
    for (fileIndex in files){
        const readableStreamForFile = fs.createReadStream(`${fullImagesPath}/${files[fileIndex]}`);
        const options = {
            pinataMetadata: {
                name: readableStreamForFile.path.slice(fileIndex + 1),
            },
        }
        try{
            const response = await pinata.pinFileToIPFS(readableStreamForFile,options);
            responses.push(response);
        }
        catch(error){
            console.log(error);
        }
    }
    return {responses,files};

}

async function storeTokenUriMetadata(metaData){
    const options = {
        pinataMetadata: {
            name: metaData.name,
        },
        pinataOptions: {
            cidVersion: 0
        }
    };
    try {
        const response = await pinata.pinJSONToIPFS(metaData,options);
        return response;
    }
    catch (e){
        console.log(e);
    }
}
module.exports = {storeImages, storeTokenUriMetadata};
