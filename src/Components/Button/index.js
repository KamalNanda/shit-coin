import styled from 'styled-components'

const Button = styled.button`
    background: #141414;
    border: 5px solid #FFFFFF;
    cursor:pointer;
    box-sizing: border-box;
    
    font-weight: 400;
    z-index:1;
    padding: ${
        props => props.type === "big"
            ? "15px 37px" : "13px"
    };
    display:block;
    width: fit-content;
    color:white;
    font-size: ${
        props => props.type === "big"
            ? "27px" : "20px"
    };
    line-height: ${
        props => props.type === "big"
            ? "36px" : "24px"
    }; 
    @media(max-width: 1440px){
        padding: ${
            props => props.type === "big"
                ? "15px 30px" : "10px"
        };
        font-size: ${
            props => props.type === "big"
                ? "24px" : "16px"
        };
        line-height: ${
            props => props.type === "big"
                ? "" : ""
        }; 
    }
    :hover{
        box-shadow: 0px 15px 20px #141414;
        transform: translateY(-7px);
    }
    @media only screen and (max-width: 850px){
        padding:0 !important;
        line-height: unset !important;
        margin:0 !important;
        padding-top:5px !important;
        padding-top:4px !important;
    }
    @media only screen and (max-width: 768px) {
        width:198px;
        padding: ${
            props => props.type === "big"
                ? "10px 20px" : ""
        };
        font-size: ${
            props => props.type === "big"
                ? "15px" : "large"
        };
        line-height: ${
            props => props.type === "big"
                ? "20px" : "unset"
        }; 
    };
`

export default Button
