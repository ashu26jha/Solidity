import {ethers} from "./ethers.js";
import {contractAddress,abi} from "./constant.js"

const connectButton = document.getElementById("connectButton");
const fundmeButton = document.getElementById("fund");
const balanceButton = document.getElementById("balance");
const flipButton = document.getElementById("flip")
const flipbackButton = document.getElementById("flipback");

flipButton.onclick = flip;
connectButton.onclick = connect;
fundmeButton.onclick = fund;
balanceButton.onclick = balance;
flipbackButton.onclick = flip;

function flip(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}

async function balance (){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(contractAddress);
    console.log(ethers.utils.formatEther(balance));
}
var temp ;
async function connect(){
    if(typeof window.ethereum != "undefined"){
        console.log("Hello");
        const accnt = await window.ethereum.request({ method: 'eth_requestAccounts' });
        temp = accnt[0];
        document.getElementById("connectButton").innerText="Connected!"
        document.getElementById("connectButton").remove();
        document.getElementById("metamaskConnect").innerHTML="<div id ='metamaskConnect1'><h2 id ='Connect-Meta'>Connected to <img src='./Images/metamask.png' width='30' height='24'></h2> </div>";
        document.getElementById("address").innerHTML=`Connected to account : ${accnt[0]}`;
    }
    else{
        document.getElementById("connectButton").innerText="No metamask! Install it first!"
        console.log("Hello");
    }
}

async function fund (){
    const ethAmount = document.getElementById("ETHAmount").value
    console.log(`Funding with amount ${ethAmount}`);
    if(typeof window.ethereum != "undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress,abi,signer);
        
        try{
            const transactionResponse = await contract.fund({value: ethers.utils.parseEther(ethAmount)});
            // console.log(transactionResponse.log);
            await listenForTransactionMine(transactionResponse,provider);
            
            console.log("Done");
            flip();
            document.getElementById('success').innerText = `Funded ${contractAddress} with ${ethAmount} from ${temp}` ;
        }
        
        catch (e){
            console.log(e);
        }
        document.getElementById("ETHAmount").value="";
    }
}

function listenForTransactionMine(transactionResponse, provider){
    console.log(`Mining ${transactionResponse.hash}`);
    return new Promise((resolve,reject)=>{
        provider.once(transactionResponse.hash, (getTransactionReceipt)=>{
            console.log(`Completed with ${getTransactionReceipt.conformations}`)
            resolve();
        });
    })
}
