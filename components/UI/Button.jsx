import styled from 'styled-components';

function Button(props) {
    return (
        <ButtonStyled onClick={props.onClick} type={props.type} disabled={props.disabled} >{props.children}</ButtonStyled>
    )
}

export default Button

const ButtonStyled = styled.button`
    display: block;
    border: none;
    background: ${props => props.disabled ? '#FBDBCD' : '#5B1717'};
    color: ${props => props.disabled ? '#C2947F' : 'white'};
    letter-spacing: 0.09em;
    font-size: 14px;
    
    padding: 15px 35px;
    border-radius: 50px;
    font-weight: 500;
    cursor: pointer;
    transition-duration: .2s;

    :hover {
        background: ${props => props.disabled ? '#FBDBCD' : '#6e1818'};
        box-shadow: 0px 6px 16px rgba(46, 6, 6, 0.164);
    }

    :active {
        background: #5B1717;
        box-shadow: none;
    }
`;