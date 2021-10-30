import styled from 'styled-components'
import Button from '../Button'

const discord = '/assets/icons/discord.svg'
const telegram = '/assets/icons/telegram.svg'
const twitter = '/assets/icons/twitter.svg'

const Wrapper = styled.div`
    height:10vh;
    background: transparent;
    padding-top: 30px;
    padding-right: 45px;
    .social-holder{
        display: flex;
        width: fit-content;
        margin-left:auto;
        img{
            margin: 0 20px;
            @media (max-width: 768px){
                margin: 0 10px;
            }
        }
    }
    @media only screen and (max-width: 768px) {
            span{
                font-size:smaller;
            }
    }
`

const Hero = () => {
    return <Wrapper>
        <div className="social-holder">
            <img src={discord} id="discord" alt="discord" />
            <img src={telegram} id="telegram" alt="telegram" />
            <img src={twitter} id="twitter" alt="twitter" />
            <Button type="small"><span>CONNECT WALLET</span></Button>
        </div> 
    </Wrapper>
}

export default Hero
