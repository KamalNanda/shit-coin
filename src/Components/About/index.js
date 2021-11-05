import { useState } from 'react'
import styled from 'styled-components'
import firebase from "../firebase"
import validator from "validator"
const cross = '/assets/icons/cross.svg'

const arrow = '/assets/icons/arrow-down-black.svg'

const Wrapper = styled.div` 
    background: #F7F7F7;
    min-height:100vh; 
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    color: #141414;
    align-items: center;
    justify-content: center;
    p{
        text-align: center;
        font-size: 25px;
        line-height: 45px;
    }
    h2{
        color:white;
        font-size:30px;
        background:black;
        padding-left:5px;
        padding-right:5px;
    }
    form{
        width:100% !important;
    }
    .w-100{
        width:100% !important; 
    }
    strong{
        font-size: 20px;
        line-height: 24px; 
        width: 36%;
        @media (max-width:768px){
            width: 80%;
        }
    }
    ::placeholder{
        font-size:larger;
        text-align:center;
    }
    :-ms-input-placeholder { 
        font-size:larger;
    }
    .d-flex{
        display: flex;
        justify-content: space-between;
        width: 40%;
        margin-bottom: 20px;
        margin-top: 20px;
        @media (max-width:768px){
            width: 90%
        }
    }
    .black-cross{
        weight: 40px;
        height: 40px;
        background: #141414;
        display: flex;  
        align-items: center;
        justify-content: center;
        text-align: center; 
        img{
            width: 100%;
            height: 100%;
        }
    }
    .black{
        background: #141414; 
        height: 40px;
        width: calc(100% - 40px);
        display: flex;  
        align-items: center;
        justify-content: center;
        text-align: center;
        color: white; 
        :hover{
            box-shadow: 0px 15px 20px #141414;
            transform: translateY(-7px);
        }
    }
    input{
        background: #141414 !important; 
        color:white;
        width:100%;
        border:none;
        padding:10px;
        text-align: center;
        font-size:18px;
    }
    .mb-1{
        margin-bottom:10px;
    }

    input::placeholder{
        color:white;
        z-index:1;
        text-align: center;
    }
    input:visited{
        border:none !important;

    }
    #arrow{
        margin-top: 40px;
        margin-bottom: 40px;
        display: block;
        cursor:pointer;
    }
    @media only screen and (max-width: 768px) {
        p{
            font-size:medium;
        }
    }
`

const Step = ({ data }) => {
    const [clicked, setclicked] = useState(false)
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
    const handleClick = () => {

        setclicked(!clicked);

    }

    return <>
        <strong>Step {data.key}: {data?.title}</strong>
        <div className="d-flex">
            <div className="black" onClick={handleClick} style={{ "cursor": "pointer" }}>
                {data.type === "button" ? data?.content : signin ? <span>Twitter Connected</span> : <span onClick={Signin}>Connect Twitter</span>}


            </div>
            <div className="black-cross">
                {clicked ? <img src={cross} alt="cross" /> : <h2 style={{ "color": "black" }}>X</h2>}
            </div>
        </div>
    </>
}
//style={{visibility : data?.isCrossVisible === true ? "unset" : "hidden"}}
const About = () => {
    const [email, setemail] = useState('')
    const [clicked, setclicked] = useState(false)
    const [errmessage, seterrmessage] = useState("")

    const handleclick = ()=>{
        setclicked(!clicked)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(email)
        handleclick()

    }
    const handleChange = (e) => {
        setemail(e.target.value)
        if(e.target.value===""){
            seterrmessage("")
        }
        else if (validator.isEmail(e.target.value)) {
            seterrmessage('Valid Email :)')
          } 
        else {
            seterrmessage('Enter valid Email!')
          }
    }
    const list = [
        {
            title: "connect your wallet",
            content: "connect wallet",
            isCrossVisible: false,
            key: 1,
            type: "button"
        },
        {
            title: "connect your twitter",
            content: "connect twitter",
            isCrossVisible: false,
            key: 2,
            type: "twitter"

        },
        // {
        //     title : "drop an email",
        //     content: "[ TYPE EMAIL ]",
        //     isCrossVisible: false,
        //     key: 3,
        //     type:"input"

        // },
        // {
        //     title : "submit",
        //     content: "submit",
        //     isCrossVisible: false,
        //     key: 4 ,
        //     type:"submit",


        // }

    ]
    const handleArrowClick = () => {
        window.scrollTo({
            top: 1500,
            left: 0,
            behavior: 'smooth'
        })
    }
    return <Wrapper>
        <p style={{ marginBottom: '60px' }} >
            Welcome $hitheads, to join the shitlist
            <br />you must follow these steps and then
            <br />wait until we’re good and ready.
        </p>
        {
            list.map((li) => {
                return <Step data={li} />
            })
        }
        <div className="d-flex align-items-center justify-content-center" >
        <form onSubmit={handleSubmit}>
            <strong>&nbsp;&nbsp;Step 3: Drop an Email</strong>
            
            <div className="d-flex w-100">
                <div className="black">
                    <input type="email" placeholder="[ TYPE EMAIL ]" onChange={handleChange} value={email} />
                    
                </div>
                <div className="black-cross">
                {clicked ? <img src={cross} alt="cross" /> : <h2 style={{ "color": "black" }}>X</h2>}
                 </div>

            </div>
            <div className="mb-1">{errmessage}</div>

            <strong>&nbsp;&nbsp;Step 4: Submit</strong>
            
            <div className="d-flex w-100">
                <div className="black">
                    <input type="submit" placeholder="Submit" />
                </div>
                <div className="black-cross">
                {clicked ? <img src={cross} alt="cross" /> : <h2 style={{ "color": "black" }}>X</h2>}
                 </div>
            </div>
        </form>
        </div>
        
        <p style={{ marginTop: "40px" }}>now read all about this shit</p>
        <img id="arrow" src={arrow} onClick={handleArrowClick} alt="alt" />
    </Wrapper>
}

export default About
