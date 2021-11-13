import styled from 'styled-components'

const Q1Wrapper =  styled.div`

.heading-answer{
    font-size: 25px;
    font-weight:400;
    line-height:42px;
    font-style:normal;
    text-transform:uppercase;
}
ul{
    padding-left:0 !important;
}

`
const Q4 = (props)=>{
    return(
            <Q1Wrapper>
                <div className="">
                <span className="heading-answer">{props.heading}</span>
                <ul>
                    {
                        props.answer.map((ans)=>{
                            return (
                                <li>{ans}</li>
                            )
                        })
                    }
                </ul>
                



{/* when the shitbot determines that the total market value of the $hitcoin collection exceeds $100,000,000 USD all of our shit will transform from silver to gold.

when the shitbot determines that the total market value of the $hitcoin collection exceeds $1,000,000,000 USD all of our shit will transform from gold to diamond.

at this stage we have reached holy shit status and each dao member will be given a parking space on the moon for their shitty lambo (when possible).

$hitcoin art is available royalty free to active shitcoin holders and can be use commercially by shitcoin holders without limit. if you want to use this $hit, you can have it. */}


                </div>
            </Q1Wrapper>
    )
}

export default Q4