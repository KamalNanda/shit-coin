import React, {useState} from 'react';

const Wallet = ()=>{
        const [errmessage,seterrmessage] = useState(null)
        const [defaultAccount,setdefaultaccount]  = useState(null)
        const [userBalance,setuserbalance] = useState(null)


        const connectWalletHandler = () => {
            if(window.ethereum){
                window.ethereum.request({method: 'eth_requestAccounts'})
                .then(result=>{
                    accountChangedHandler(result[0])
                })

            }
            else{
                console.log("install metamask")
            }
        }
        const accountChangedHandler = (newAccount) => {
            setdefaultaccount(newAccount)
            getUserBalance(newAccount)

        }
        const getUserBalance = (address)=>{

        }
}

