import React from 'react';
import styled from 'styled-components';


function ButtonIcon(props) {
    return (
        <Button onClick={props.onClick}>
            <i>
                {props.icon}
            </i>
            {props.children}
        </Button>
    )
}


export default ButtonIcon;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    color: #5B1717;
    background: #FBD2A4;
    border-radius: 50px;
    border: none;
    padding: 13px 35px;
    cursor: pointer;

    i {
        margin-right: 10px;
    }
`;
