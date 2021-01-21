import React from 'react';
import styled from 'styled-components';


function Prelouder() {
    return (
        <PrelouderStyle>
            <img src="/preloader/Reload.svg" alt="Ожидайте..." />
        </PrelouderStyle>
    )
}

export default Prelouder

const PrelouderStyle = styled.div`
    z-index: 10;
    width: 870px;
    min-height: 50vh;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;