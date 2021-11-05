import styled from 'styled-components'
import Header from '../Header'
import Button from '../Button'
const shadow = '/assets/images/shadow.png'
const poop = '/assets/images/poop.png'
const shit = '/assets/images/shit.gif'
const arrow = '/assets/images/Arrow 16.png'
const twitter = '/assets/icons/twitter.svg'

const Wrapper = styled.div`
    background: #141414;
    height:106vh;
    .overlay{  
    position: absolute;
    top: 0;
    bottom: 0;
    height: 106vh;
    background: black;
    opacity: 0.6;
    width: 100%;
        @media only screen and (max-width: 768px) {
            // height:107vh;
        }
}  
    .nav-header{
        height:10vh;
        background: transparent;

        padding-top: 30px;
        padding-right: 45px;
        img{
            margin-left: 40px !important;
            
        }


        .social-holder{
            display: flex;
            align-items: center;

            width: fit-content;
            margin-left:auto;
            img{
                margin: 0 20px;
                z-index:111;
                width:50px;
                @media (max-width: 768px){
                    margin: 0 10px;
                        width:35px;
                    
                }
            }
        }
        @media only screen and (max-width: 768px) {
            padding-right:10px;    
            span{
                    font-size:smaller;
                }

              
        }
    }

    .gif-image{
        opacity:0.8;
        position:absolute;
        background: linear-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.75) 100%) !important;

        overflow:hidden !important;
        z-index:0;
        width:98vw;
        height:106vh;
        fiter:blur(2px);
        @media only screen and (max-width: 768px){
            object-fit:cover;
            // height:107vh;
        }
    }
 
    .hero-container{ 
        min-height:90vh; 
        margin-top:1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        z-index:-1;
        .hero-img{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;  
            #poop{
                position: absolute; 
            }
        }
        p{
            z-index:1;
            text-transform: uppercase;
            margin: 20px 0 40px 0;
            font-size: 25px;
            @media(max-width: 1440px){
                font-size: 18px; 
                margin: 20px 0 3% 0;
            }
            @media only screen and (max-width: 768px){
                
            }
        }
       
        h2{
            z-index:1;
            font-size:100px !important;
            font-weight:800;
            font-style:normal;
            font-family:open sans;
            line-height: 136px; 
            @media(max-width: 1440px){
                font-size: 32px;
            }
            @media only screen and (max-width: 768px){
                h2{
                    font-size:50px;
                    line-height: unset;
                }
            }
        }
        #arrow{
            margin-top: 60px;
            display: block;
            z-index:1;
            cursor:pointer;

            margin-bottom: 40px;
            @media(max-width: 1440px){
                margin-top: 20px;
            }
          }
        @media only screen and (max-width: 768px) {
            .nav-header{
                padding-right:5px !important;
            }
           #arrow{
               margin-bottom:10rem;
               margin-top:2rem;
           }
          
           .fkndbE .gif-image{
               height:84vh !important;
           }
            p{
                font-size:small;
                margin-bottom:29px;
            }
            h2{
                font-size:xx-large !important;
                line-height: unset;
            }
            
        }
    }
`



const handleArrowClick = ()=>{
    window.scrollTo({
        top:900,
        left:0,
        behavior:'smooth'
    })
}

const Hero = () => {
    return <Wrapper>
            <img src={shit}  loop="infinite" className="gif-image" alt="loading..." />
            <div className="overlay" />
            <div className="nav-header">
            <div className="social-holder">
           
            <Button type="small"><span>CONNECT WALLET</span></Button>
            <img src={twitter}  id="twitter" alt="twitter" />

        </div> 
        </div>
        <div className="hero-container">
           
            <h2>$HITCOINS.<span style={{"font-weight": "400","font-style": "italic"}}>CHEAP</span></h2>
            <p>you’ve never seen shit like this before!</p>
            <Button type="big" onClick={handleArrowClick}>get ready to Start some shit</Button>
            <img id="arrow" src={arrow} alt="alt" onClick={handleArrowClick}/>
        </div>
    </Wrapper>
}

export default Hero
