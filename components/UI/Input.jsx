import React from 'react';
import styled from 'styled-components';

function Input(props) {



    return (
        <InputStyle>
            <label htmlFor={props.label}>{props.label}</label>
            <input
                type={props.type}
                id={props.label}
                placeholder={props.placeholder}
                autoFocus
                value={props.value}
                onChange={props.onChange} />
        </InputStyle>
    )
}

export default Input;


const InputStyle = styled.div`
    margin-bottom: 30px;

    label {
        display: block;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        color: #562F2F;
        margin-bottom: 10px;
    }

    input {
        width: 350px;
        height: 50px;
        font-size: 16px;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 0;
        border: none;
        outline: 1px solid #EED6CD;
        transition-duration: .2s;
        

        :focus {
            outline: 1px solid #5B1717;
        }
    }
`;

