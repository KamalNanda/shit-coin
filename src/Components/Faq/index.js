import styled from 'styled-components'
import {useState} from 'react'
const arrowWhite = '/assets/icons/arrow-white.svg'
const arrowBlack = '/assets/icons/arrow-black.svg'
const FAQWrapper = styled.div`
    width: 100%;
    background: ${
        props => props.type === "black" 
            ? "#141414" : "#F7F7F7"
    };
    
    font-size: 25px;
    line-height: 30px;
    padding: 25px;
    
    color: ${
        props => props.type === "black" 
            ? "white" : "#141414" 
    };
    
    .arrow-img{
        margin-right: 20px;
        cursor: pointer; 
    }
    .arrow-right{
        transform: rotateZ(-90deg);
    }
    .faq-question{
        padding-left: 30%;
        display:flex;
        align-items:center;
        width: 100%: 
    }
    .faq-answer{
        min-height: 50vh;
        display:flex;
        flex-direction: column;
        align-items:start;
        justify-content:center;
        list-style: none;
        @media (max-width: 1660px){
            padding: 80px;
            padding-left: 20%;
        }
    }
    @media only screen and (max-width: 768px) {
        font-size:large;
        .faq-question{
            width:unset;
            padding-left:3%;
            line-height:unset;
            font-size:small;
        }
        .faq-answer{
            margin-left:1.75rem;
            margin-right:1.75rem;
            margin-top:1rem;
            padding: 20px;
        }
    }
`

const Wrapper = styled.div`
    background: #F7F7F7;;

`

const FAQ = (props) => {
    const [isShow, setShow] = useState(false)
    const toggleShow = () => setShow(!isShow)
    return <FAQWrapper type={props.type}>
        <div className="faq-question d-flex align-items-center justify-content-center">
            <img src={props.type === "white" ? arrowBlack : arrowWhite} onClick={toggleShow} className={`arrow-img ${isShow ? "" : "arrow-right"}`} />
            <p>{props.question}</p>
        </div> 
        {
            isShow && <div className="faq-answer ">
                <ul>
            {
                props.answer.map(answer => {
                    return <li>{answer}</li> 
                }) 
            }
        </ul>
        </div>
        } 
    </FAQWrapper>
}

const FAQs = () => {
    const faqs = [
        {
            question: '$hitcoins, cheap!',
            type: 'black',
            answer: ["Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha"]
        },
        {
            question: 'How $hitcoins work',
            type: 'white',
            answer:["Shitcoins have a unique smart contract with unique features","anti-dump insurance","grow your own network","grow multiple networks simultaneously","merge networks with other shitcoin token holders"]
        },
        {
            question: 'The Infinite Diluting Royalty Smart Contract',
            type: 'black',
            answer:["details from toilet (white) paper","NFT set tokenomic","royalties","shitcoin diaspora diagram ","details"]
        },
        {
            question: 'When is $hit happening?',
            type: 'white',
            answer:["whitelist open","minting dates (open monthly until sell out)","selling your shitcoin gets a replacement Shithead PFP","Selling your pfp creates a new tangent on your lineage","then we become a DAO","then we fund dreams"]
        },
        {
            question: 'Who made this $hit? ',
            type: 'black',
            answer:["metafive","spacecowboy","rob.eth","pranav" ]
        }
    ]
    return <Wrapper>
        {
            faqs.map((faq, i) => {
                return <FAQ answer={faq.answer} question={faq.question} type={faq.type} />
            })
        }
    </Wrapper>
}

export default FAQs 
