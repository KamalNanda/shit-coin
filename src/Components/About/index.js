import { useState } from 'react'
import styled from 'styled-components'
import firebase from "../firebase"
import validator from "validator"
const cross = '/assets/icons/cross.svg'

const arrow = '/assets/icons/arrow-down-black.svg'

const Wrapper = styled.div` 
    background: #F7F7F7;
    min-height:100vh; 
    padding-top: 51px;
    padding-left:30px;
    padding-right:30px;
    display: flex;
    flex-direction: column;
    color: #141414;
    align-items: center;
    justify-content: center;
    .w-100{
        width:100%;
    }
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
            width: 90%;
            font-size:15px;
            // margin-top:10px;
            // margin-bottom:10px;
            line-height:15px;
            font-weight:bolder;
        }
    }
    form{
        strong{
            margin-left:28px;
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
        width: calc(100% - 50px);
        display: flex !important;  
        align-items: center !important;
        justify-content: center !important;
        text-align: center;
        color: white; 
        :hover{
            box-shadow: 0px 15px 20px #141414;
            transform: translateY(-7px);
        }
        
    }
    .black-input{
        
            background: #141414; 
            height: 40px;
            width: calc(100% - 50px);
            display: flex;  
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
    }
    .mt-0{
        margin-top:0 ;
    }
    input{
        background: #141414 !important; 
        color:white;
        width:100%;
        height:40px !important;
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
        .l-normal{
            line-height:45px;
            font-size:12px;
        }
        .black{
            padding-top:5px;
            font-size:small;
            letter-spacing: 0.5px;
        }
        .black-input{
            padding-top:5px;

        }
        input{
            height:auto;
            font-size:small;
        }
    }
    
`

const Step = ({ data,defaultAccount,connectWalletHandler,signin,Signin }) => {
    const [clicked, setclicked] = useState(false)
    const handleClick = () => {

        setclicked(!clicked);

    }

    return <>
        <strong>Step {data.key}: {data?.title}</strong>
        <div className="d-flex">
            <div className="black" onClick={handleClick} style={{ "cursor": "pointer" }}>
                {data.type === "button" ? defaultAccount?<span>Wallet Connected</span>:<span onClick={connectWalletHandler}>{data?.content} </span>: signin ? <span>Twitter Connected</span> : <div className="w-100"onClick={Signin}>Connect Twitter</div>}


            </div>
            <div className="black-cross">
                {clicked ? <img src={cross} alt="cross" /> : <img src={cross} alt="cross" style={{"visibility": "hidden"}}/>}
            </div>
        </div>
    </>
}
//style={{visibility : data?.isCrossVisible === true ? "unset" : "hidden"}}
const About = (props) => {
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
            top: 1700,
            left: 0,
            behavior: 'smooth'
        })
    }
    return <Wrapper>
        <p style={{ marginBottom: '19px' }} className="l-normal mb-5 ">
            Welcome $hitheads, to join the shitlist
            <br />you must follow these steps and then
            <br />wait until we’re good and ready.
        </p>
        {
            list.map((li) => {
                return <Step data={li} defaultAccount={props.defaultAccount} connectWalletHandler={props.connectWalletHandler}
                signin={props.signin} Signin={props.Signin}/>
            })
        }
        <div className="d-flex align-items-center justify-content-center mt-0" >
        <form onSubmit={handleSubmit}>
            <strong>Step 3: Drop an Email</strong>
            
            <div className="d-flex w-100">
                <div className="black-input">
                    <input type="email" placeholder="[ TYPE EMAIL ]" onChange={handleChange} value={email} />
                    
                </div>
                <div className="black-cross">
                {clicked ? <img src={cross} alt="cross" /> : <img src={cross} alt="cross" style={{"visibility": "hidden"}}/>}
                 </div>

            </div>
            <div className="mb-1">{errmessage}</div>

            <strong>Step 4: Submit</strong>
            
            <div className="d-flex w-100">
                <div className="black-input">
                    <input type="submit" placeholder="Submit" style={{"padding":"0"}} />
                </div>
                <div className="black-cross">
                {clicked ? <img src={cross} alt="cross" /> : <img src={cross} alt="cross" style={{"visibility": "hidden"}}/>}
                 </div>
            </div>
        </form>
        </div>
        
        <p style={{ marginTop: "40px" }}>now read all about this shit</p>
        <img id="arrow" src={arrow} onClick={handleArrowClick} alt="alt" />
    </Wrapper>
}

export default About
