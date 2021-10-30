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
        padding-left: 20%;
        display:flex;
        width: 100%: 
    }
    .faq-answer{
        min-height: 90vh;
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content:center;
        list-style: none
    }
`

const Wrapper = styled.div`
    background: #F7F7F7;;

`

const FAQ = (props) => {
    const [isShow, setShow] = useState(false)
    const toggleShow = () => setShow(!isShow)
    return <FAQWrapper type={props.type}>
        <div className="faq-question">
            <img src={props.type === "white" ? arrowBlack : arrowWhite} onClick={toggleShow} className={`arrow-img ${isShow ? "" : "arrow-right"}`} />
            <p>{props.question}</p>
        </div> 
        {
            isShow && <ul className="faq-answer">
            {
                props.answer.map(answer => {
                    return <li>{answer}</li> 
                }) 
            }
        </ul>
        } 
    </FAQWrapper>
}

const FAQs = () => {
    const faqs = [
        {
            question: '$hitcoins, cheap!',
            type: 'black',
            answer: ["Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha"]
        },
        {
            question: 'How $hitcoins work',
            type: 'white',
            answer: ["Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha"]
        },
        {
            question: 'The Infinite Diluting Royalty Smart Contract',
            type: 'black',
            answer: ["Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha"]
        },
        {
            question: 'When is $hit happening?',
            type: 'white',
            answer: ["Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha"]
        },
        {
            question: 'Who made this $hit? ',
            type: 'black',
            answer: ["Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha","Shitcoins hahahahahaha Shitcoins hahahahahaha Shitcoins hahahahahaha"]
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