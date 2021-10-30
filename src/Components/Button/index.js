import styled from 'styled-components'

const Button = styled.button`
    background: #141414;
    border: 5px solid #FFFFFF;
    box-sizing: border-box;
    font-weight: 400;
    padding: ${
        props => props.type === "big"
            ? "20px 40px" : "15px"
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
    }
`

export default Button