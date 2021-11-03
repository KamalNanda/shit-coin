import styled from 'styled-components'

const Button = styled.button`
    background: #141414;
    border: 5px solid #FFFFFF;
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
                ? "30px" : "20px"
        }; 
    }
    @media only screen and (max-width: 768px) {
        padding: ${
            props => props.type === "big"
                ? "10px 20px" : "7.5px"
        };
        font-size: ${
            props => props.type === "big"
                ? "15px" : "10px"
        };
        line-height: ${
            props => props.type === "big"
                ? "20px" : "15px"
        }; 
    };
`

export default Button
