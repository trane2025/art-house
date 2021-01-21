import React from 'react';
import styled from 'styled-components';

function Select(props) {
    return (
        <Container>
            <h3 className='label-sort'>Сортировать по</h3>
            <select onChange={props.onChange} value={props.value}>
                <option value='1'>По умолчанию</option>
                <option value='2'>По возрастанию цены</option>
                <option value='3'>По убыванию цены</option>
            </select>
        </Container>
    )
}

export default Select;

const Container = styled.div`
    
    display: flex;
    align-items: center;
    

    .label-sort {
       color: #867A74;
       margin-right: 10px;
       font-size: 14px;
       font-weight: 400; 
    }

    select {
        padding: 10px 20px;
        border: 1px solid #EED6CD;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        color: #562F2F;
        cursor: pointer;
    }
`;
