// import { func } from 'prop-types';
import { Contract } from 'ethers';
import {useWeb3Contract} from 'react-moralis';

export default function LotteryEntrance() {
    const {runContractFunction: enterRaffle}= useWeb3Contract(
        abi:12,
        contractAddress:,
        functionName:,
        msgValue:,
        params: {},
    )
}
