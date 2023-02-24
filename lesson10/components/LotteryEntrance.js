// import { func } from 'prop-types';
import { Contract } from 'ethers';
import {useWeb3Contract} from 'react-moralis';
import {frontend,abi} from '../constants/index';
import { useMoralis } from 'react-moralis';
import { useEffect, useState } from 'react';
import {ethers} from 'ethers'

export default function LotteryEntrance() {
    const {chainId: chainIdHex, isWeb3Enabled} = useMoralis(); 
    const chainID = (parseInt(chainIdHex));
    const contractAddress = chainID in frontend ? frontend[chainID][0] : null;
    console.log(contractAddress);
    const [entranceFee,setEntranceFee] = useState("0")
    let EntranceFeeETH = "";

    const {runContractFunction: enterRaffle}= useWeb3Contract({
            abi: abi,
            contractAddress: contractAddress,
            functionName: "enterRaffle",
            msgValue: entranceFee,
            params: {},
        }
    )

    const {runContractFunction: getEntranceFee}= useWeb3Contract({
            abi: abi,
            contractAddress: contractAddress,
            functionName: "getEntranceFee",
            // msgValue:,
            // params: {},
        }
    )

    useEffect(()=>{
        console.log("H")
        if(isWeb3Enabled){
            async function help(){
                if(contractAddress != null){
                    const entranceFeeFromContract = (await getEntranceFee()).toString();
                    setEntranceFee(entranceFeeFromContract)
                    EntranceFeeETH = ethers.utils.formatUnits(entranceFeeFromContract,"ether")
                    console.log("Entrance fee is ",entranceFeeFromContract)
                }
            }
            help()
        }
    },[isWeb3Enabled]);

    return (
    <div>
        {   
            contractAddress ?
                <div>Entrance Fee: {ethers.utils.formatUnits(entranceFee,"ether")} ETH <button onClick={ async function() {
                        enterRaffle()
                    }}>Enter Raffle</button>
                </div> 
                : 
                <div>
                    This network is not supported
                </div>
        }
    </div>
    )
}
