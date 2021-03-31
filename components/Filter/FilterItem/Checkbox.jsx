import React from 'react';
import styled from 'styled-components';

function Checkbox(props) {

    return (
        <CheckBoxStyle>
            <div className="container-checkbox">
                <input type="checkbox" id={props.id} onChange={() => props.onChecked(props.id, props.checked)} name={props.name} checked={props.checked} />

                <label htmlFor={props.id} className='checkBox-custom' >
                    <i className="checkbox-icon">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.506 3.47047L4.13543 6.21597L8.84701 1.52909" stroke="#5B1717" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </i>
                </label>
                <label className='label-checkbox' htmlFor={props.id}>{props.label}</label>
            </div>
        </CheckBoxStyle>
    )
}

export default Checkbox

const CheckBoxStyle = styled.li`

    animation-name: fade;
    animation-duration: .8s;
    padding-bottom: 5px;
     

    .container-checkbox {
        padding: 0 30px;
        display: flex;
        align-items: center;
        padding-bottom: 5px;
    }

    input {
        display: none;
    }

    .label-checkbox {
        cursor: pointer;
        color: #562F2F;
        font-size: 12px;
        font-weight: 400;
    }

    .checkBox-custom {
        margin-right: 10px;
        width: 16px;
        height: 16px;
        min-width: 16px;
        min-height: 16px;
        background: #FFFFFF;
        border: 1px solid #F7D3C6;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        .checkbox-icon {
            opacity: 0;
        }

        :hover {
            background:#FBD2A4;
        
        }
    }

    input:checked + .checkBox-custom {
        background:#FBD2A4;
        .checkbox-icon {
            opacity: 1;
        }
    }
`;