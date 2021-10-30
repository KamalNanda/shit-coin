import styled from 'styled-components'
import Header from '../Header'
import Button from '../Button'
const shadow = '/assets/images/shadow.png'
const poop = '/assets/images/poop.png'
const arrow = '/assets/icons/arrow-down-white.svg'

const Wrapper = styled.div`
    background: #141414;
    height:100vh; 
    .hero-container{ 
        height:90vh; 
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
        }
        h2{
            font-size: 40px;
            line-height: 48px; 
        }
        #arrow{
            margin-top: 60px;
            display: block;
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
            <p>you’ve never seen shit like this before</p>
            <Button type="big">get ready to buy some shit</Button>
            <img id="arrow" src={arrow} alt="alt" />
        </div>
    </Wrapper>
}

export default Hero