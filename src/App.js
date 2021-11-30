import React,{useState} from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import FAQ from './Components/Faq'
import Footer from './Components/Footer'
import firebase from './Components/firebase'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
    const [errmessage,seterrmessage] = useState(null)
    const [defaultAccount,setdefaultaccount]  = useState(null)
    const [userBalance,setuserbalance] = useState(null)
    const [signin, setsignin] = useState(false)

    
    const handlesignin = () => {

      setsignin(true);

  }
  const Signin = () => {
      var Twitter_provider = new firebase.auth.TwitterAuthProvider();
      firebase.auth().signInWithPopup(Twitter_provider)
          .then((re) => {
              handlesignin();
          })
          .catch((err) => {
              console.log(err)
          })
  }
    const connectWalletHandler = () => {
      if(window.ethereum){
          window.ethereum.request({method: 'eth_requestAccounts'})
          .then(result=>{
              accountChangedHandler(result[0])
          })

      }
      else{
          alert("install metamask in your browser")
      }
  }
  const accountChangedHandler = (newAccount) => {
      setdefaultaccount(newAccount)
      getUserBalance(newAccount)

  }
  const getUserBalance = (address)=>{
          window.ethereum.request({method: 'eth_getBalance',params:[address, 'latest']})
          .then(balance=>{
              setuserbalance(balance)
              console.log(balance)
          })
  }




    return (
    <div> 
        <Hero defaultAccount={defaultAccount} connectWalletHandler={connectWalletHandler}  signin={signin} Signin={Signin}/>
        <About defaultAccount={defaultAccount} connectWalletHandler={connectWalletHandler}   signin={signin} Signin={Signin}/>
        <FAQ />
        <Footer  signin={signin} Signin={Signin}/>
    </div>
  );
}

export default App;
