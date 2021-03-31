import React from 'react';
import styled from 'styled-components';

function TextArea(props) {



    return (
        <TextAreaStyle>
            <label htmlFor={props.label}>{props.label}</label>
            <textarea
                type={props.type}
                id={props.label}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange} />
        </TextAreaStyle>
    )
}

export default TextArea;


const TextAreaStyle = styled.div`
    margin-bottom: 30px;

    label {
        display: block;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        color: #562F2F;
        margin-bottom: 10px;
    }

    textarea {
        width: 100%;
        font-family: 'Open Sans';
        resize: vertical;
        min-height: 100px;
        font-size: 16px;
        padding-top: 15px;
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

