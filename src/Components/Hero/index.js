import styled from 'styled-components'
import Header from '../Header'
import Button from '../Button'
const shadow = '/assets/images/shadow.png'
const poop = '/assets/images/poop.png'
const arrow = '/assets/icons/arrow-down-white.svg'

const Wrapper = styled.div`
    background: #141414;
    min-height:100vh;  
    .hero-container{ 
        min-height:90vh; 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
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
            text-transform: uppercase;
            margin: 40px 0;
            font-size: 25px;
            @media(max-width: 1440px){
                font-size: 18px; 
                margin: 20px 0;
            }
        }
        h2{
            font-size: 40px;
            line-height: 48px; 
            @media(max-width: 1440px){
                font-size: 32px;
                line-height: 36px;
            }
        }
        #arrow{
            margin-top: 60px;
            display: block;
            margin-bottom: 40px;
            @media(max-width: 1440px){
                margin-top: 40px;
            }
        }
        @media only screen and (max-width: 768px) {
            p{
                font-size:small;
            }
            h2{
                font-size:larger;
            }
            
        }
    }
`

const Hero = () => {
    return <Wrapper>
        <Header />
        <div className="hero-container">
            <div className="hero-img">
                <img src={shadow} id="shadow" alt="shadow" />
                <img src={poop} id="poop" alt="poop" />
            </div>
            <h2>$HITCOINS.CHEAP</h2>
            <p>quality shit like you’ve never seen before!</p>
            <Button type="big">get ready to buy some shit</Button>
            <img id="arrow" src={arrow} alt="alt" />
        </div>
    </Wrapper>
}

export default Hero
