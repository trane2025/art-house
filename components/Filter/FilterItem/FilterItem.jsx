import { useState } from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';


function FilterItem({ title, items, toggleCheckbox, isShow }) {

    const [isOpen, setIsOpen] = useState(isShow);

    const onChecked = (id, checked) => {
        toggleCheckbox(id, !checked);
    }

    return (
        <FilterItemStyle open={isOpen}>
            <div className="title-wraper" onClick={() => { setIsOpen(!isOpen) }} >
                <h4>{title}</h4>
                <i className='icon-arrow'>
                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" >
                        <path d="M13.3137 7.47241L7.65687 1.84521L2.00001 7.47241" stroke="#562F2F" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </i>
            </div>

            {isOpen && <>
                {items.map((item, index) => {
                    return (
                        <Checkbox
                            key={index}
                            onChecked={onChecked}
                            label={item.checkBoxName}
                            name={item.checkBoxName}
                            id={item.id}
                            checked={item.checked} />
                    )
                })}
            </>}

        </FilterItemStyle>
    )
}

export default FilterItem;

const FilterItemStyle = styled.div`
    user-select: none;
    cursor: pointer;
    transition-duration: .3s;
    border-bottom: 1px solid #F7D3C6;


    :hover {
            background: white;
        }
        
    .title-wraper {
        padding: 15px 30px;
        
        display: flex;
    }

    h4 {
        font-weight: 600;
        font-size: 14px;
        color: #562F2F;
        flex: 1;
    }

    .icon-arrow {
        transition-duration: .2s;
        transform: ${props => props.open ? 'rotate(-180deg)' : 'rotate(0)'}
    }

    p {
        font-family: Open Sans;
        font-size: 14px;
        color: #562F2F;
    }

`;
