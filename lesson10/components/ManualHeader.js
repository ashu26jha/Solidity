import { useMoralis } from "react-moralis"
import {useEffect} from 'react';

export default function ManualHeader () {
    
    const { enableWeb3, isWeb3Enabled, isWeb3EnableLoading, account, Moralis, deactivateWeb3 } = useMoralis();

    useEffect( ()=> {
        // console.log("Hello");
        console.log("Account is : ", account);
        // if(account == null && ){
        //     window.localStorage.removeItem("connected");
        //     deactivateWeb3();
        //     console.log("Null account")
        // }
        Moralis.onAccountChanged((newAccount)=>{
            console.log(`Account changed to ${console.log(newAccount)}`);
            if(newAccount == null){
                window.localStorage.removeItem("connected");
                deactivateWeb3();
                console.log("Null account")
            }
        })

    },[])

    useEffect(()=>{
        if(isWeb3Enabled){
            return;
        }
        if(account == null && window.localStorage.getItem("connected")){
            enableWeb3();
        }
        if(typeof window !== "undefined" && window.localStorage.getItem("connected") ){
            console.log("Nhi tha connect.. Connect kiya")
            enableWeb3();
        }
    },[isWeb3Enabled])

    return(
        <div>
            {
                account ? <div>Connected to {account}</div>  : 
                    <button 
                        onClick = { 
                                async () => {
                                    await enableWeb3();
                                    if(typeof window !== "undefined"){
                                        window.localStorage.setItem("connected","injected");
                                    }
                                } 
                            }
                        disabled = {isWeb3EnableLoading}        
                    >
                        Connect 
                    </button>
            }
        </div>
    )
}
