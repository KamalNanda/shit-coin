import React from 'react'
import firebase from "../firebase"


const Signin = (props)=>{
    var Twitter_provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithPopup(Twitter_provider)
    .then((re)=>{
        props.handleSignin();
    })
    .catch((err)=>{
        console.log(err)
    })
}

export default Signin