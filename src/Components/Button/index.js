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
            ? "18px 40px" : "13px"
    };
    display:block;
    width: fit-content;
    color:white;
    font-size: ${
        props => props.type === "big"
            ? "30px" : "20px"
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
    @media only screen and (max-width: 768px) {
        padding: ${
            props => props.type === "big"
                ? "10px 20px" : "9.5px"
        };
        font-size: ${
            props => props.type === "big"
                ? "15px" : "14px"
        };
        line-height: ${
            props => props.type === "big"
                ? "20px" : "15px"
        }; 
    };
`

export default Button
