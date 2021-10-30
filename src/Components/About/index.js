import styled from 'styled-components' 
const cross = '/assets/icons/cross.svg'
const arrow = '/assets/icons/arrow-down-black.svg'

const Wrapper = styled.div` 
    background: #F7F7F7;;
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
    strong{
        font-size: 20px;
        line-height: 24px; 
        width: 36%;
        @media (max-width:1440px){
            width: 80%
        }
    }
    .d-flex{
        display: flex;
        justify-content: space-between;
        width: 40%;
        margin-bottom: 20px;
        margin-top: 20px;
        @media (max-width:1440px){
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
    }
    #arrow{
        margin-top: 40px;
        margin-bottom: 40px;
        display: block;
    }
    @media only screen and (max-width: 768px) {
        p{
            font-size:medium;
        }
    }
`

const Step = ({data}) => { 
    return <>
        <strong>Step {data.key}: {data?.title}</strong>
        <div className="d-flex">
            <div className="black">
                {data?.content}
            </div>
            <div className="black-cross">
                <img style={{visibility : data?.isCrossVisible === true ? "unset" : "hidden"}} src={cross} alt="cross" />
            </div>
        </div>
    </>
}

const About = () => {
    const list = [
        {
            title : "connect your wallet",
            content: "connect wallet",
            isCrossVisible: true,
            key: 1 
        },
        {
            title : "connect your twitter",
            content: "connect twitter",
            isCrossVisible: false,
            key: 2 
        },
        {
            title : "drop an email",
            content: "[ TYPE EMAIL ]",
            isCrossVisible: false,
            key: 3 
        },
        {
            title : "submit",
            content: "submit",
            isCrossVisible: false,
            key: 4 
        }
    ]
    return <Wrapper>
        <p style={{marginBottom: '60px'}} >
            Welcome $hitheads, to join the shitlist 
            <br/>you must follow these steps and then 
            <br/>wait until we’re good and ready. 
        </p> 
        {
            list.map( (li) => { 
                return <Step data={li} />
            })
        }
        <p  style={{marginTop: "40px"}}>now read all about this shit</p>
        <img id="arrow" src={arrow} alt="alt" />
    </Wrapper>
}

export default About 
