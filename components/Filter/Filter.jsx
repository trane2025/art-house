import React from 'react';
import ButtonFilter from '../UI/ButtonFilter';
import styled from 'styled-components';
import FilterItem from './FilterItem/FilterItem';
import FilterItemRange from './FilterItem/FilterItemRange';




function Filter({ filter, toggleCheckbox, filterArrServer, clearFilter }) {
    return (
        <FilterStyle>
            <div>
                <div className='filter-title'>
                    <h3>
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" className='filter-icon'>
                            <line x1="0.5" y1="1.37939" x2="11.5" y2="1.37939" stroke="#562F2F" strokeLinecap="round" />
                            <line x1="0.5" y1="5.3584" x2="11.5" y2="5.3584" stroke="#562F2F" strokeLinecap="round" />
                            <line x1="0.5" y1="9.3374" x2="11.5" y2="9.3374" stroke="#562F2F" strokeLinecap="round" />
                        </svg>

                        Фильтр
                    </h3>
                </div>

                {filter.result && filter.result.map((key, index) => {

                    const itemFilter = filter.entities.checkBox[key];

                    if (itemFilter.type === 'int') {
                        return (
                            <FilterItemRange
                                key={index + itemFilter.label}
                                title={itemFilter.label}
                                items={filter.entities.checkBoxItems}
                                itemsKey={itemFilter.items}
                                toggleCheckbox={toggleCheckbox}
                                isShow={itemFilter.isShow} />
                        )
                    }
                    else return (
                        <FilterItem
                            key={index}
                            title={itemFilter.label}
                            items={filter.entities.checkBoxItems}
                            itemsKey={itemFilter.items}
                            toggleCheckbox={toggleCheckbox}
                            isShow={itemFilter.isShow}
                        />
                    )
                })}

                <div className="button-container">
                    <ButtonFilter primery onClick={filterArrServer}>Показать</ButtonFilter>
                    <ButtonFilter onClick={clearFilter}>Очистить</ButtonFilter>
                </div>
            </div>
        </FilterStyle>
    )
}

export default Filter;

const FilterStyle = styled.section`
    margin-top: 15px;
    padding: 15px 0;
    padding-bottom: 0;
    min-width: 270px;
    background: #FFEFE9;
    border: 1px solid #F7D3C6;
    height: fit-content;
    
    .filter-title {
        border-bottom: 1px solid #F7D3C6;
    }

    .filter-icon {
        margin-right: 10px;
    }

    h3 {
        font-family: PT Serif; 
        text-transform: uppercase;
        color: #562F2F;
        letter-spacing: 0.1em;
        text-align: center;
        font-size: 24px;
        margin-bottom: 15px;
    }

    .button-container {
        margin-right: 30px;
        margin-left: 30px;
        padding-top: 15px;
        margin-bottom: 15px;

        button:last-child {
            margin: 0;
        }
    }
`;


