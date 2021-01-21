import styled from 'styled-components';

function Button(props) {
    return (
        <ButtonStyled onClick={props.onClick} primery={props.primery} type={props.type} >{props.children}</ButtonStyled>
    )
}

export default Button

const ButtonStyled = styled.button`
    display: block;
    border: none;
    background: ${props => props.primery ? ' #5B1717 ' : '  #FBD2A4  '};
    color: ${props => props.primery ? ' white ' : '#5B1717'};
    width: 100%;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 8px;
    padding: 10px 0;
    border-radius: 50px;
    cursor: pointer;
    transition-duration: .2s;

    :hover {
        background: ${props => props.primery ? ' #763131 ' : '  #f0bf88  '};
    }

    :active {
        background: ${props => props.primery ? ' #5B1717 ' : '  #FBD2A4  '};
    }
`;