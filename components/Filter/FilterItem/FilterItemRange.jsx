import { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { changeRange } from '../../../store/reducers/filter';
import RangeComponent from './RangeComponent';



function FilterItemRange({ title, items, isShow, itemsKey, changeRange }) {


    let idMinCount = useRef();
    let idMaxCount = useRef();


    const arrCount = itemsKey.map((key, index) => {
        if (index === 0) {
            idMinCount.current = items[key].id
        }
        else idMaxCount.current = items[key].id
        return items[key]
    })



    const min = +arrCount[0].checkBoxName;
    const max = +arrCount[1].checkBoxName;



    const [isOpen, setIsOpen] = useState(isShow);

    const setChangeRangeStore = (arr) => {
        const min = arr[0];
        const max = arr[1];

        changeRange(min, max, idMinCount.current, idMaxCount.current);
    }

    return (
        <FilterItemStyle open={isOpen}>
            <div className="title-wraper" onClick={() => { setIsOpen(!isOpen) }} >
                <h4>{title}</h4>
                <i className='icon-arrow'>
                    <svg width="8" height="8" viewBox="0 0 15 9" fill="none" >
                        <path d="M13.3137 7.47241L7.65687 1.84521L2.00001 7.47241" stroke="#562F2F" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </i>
            </div>

            {isOpen && <ContainerCheckBox>
                <RangeComponent min={min} max={max} setChangeRangeStore={setChangeRangeStore} />
            </ContainerCheckBox>}

        </FilterItemStyle>
    )
}

export default connect('', { changeRange })(FilterItemRange);

const ContainerCheckBox = styled.ul`
    max-height: 200px;
    overflow-y: auto;
`;

const FilterItemStyle = styled.div`
    user-select: none;
    cursor: pointer;
    transition-duration: .3s;
    border-bottom: 1px solid #F7D3C6;


    :hover {
            background: white;
        }
        
    .title-wraper {
        padding: 8px 30px;
        
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
