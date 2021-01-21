import React from 'react';
import styled from 'styled-components';

function CatalogNull() {
    return (
        <CatalogStyle>
            <div>
                <img src="/images/not-found.jpg" alt="Не найдено" />
                <h1>Товар не найден!</h1>
                <p>Попробуйте изменить критерии поиска</p>
            </div>
        </CatalogStyle>
    )
}

export default CatalogNull

const CatalogStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;

    h1 {
        text-transform: uppercase;
        font-family: 'PT Serif';
        letter-spacing: 0.1em;
        margin-bottom: 7px;
    }

    p {
        font-size: 24px;
        line-height: 40px;
        color: #7D5C5C;
        font-weight: 300;
    }

`;
