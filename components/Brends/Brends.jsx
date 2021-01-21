import React from 'react';
import styled from 'styled-components';



function Brends() {
    return (
        <BrendsStyle>
            <h2>Производители</h2>
            <ul>
                <li>
                    <img src="/images/homePage/brends/Arte-lamp.jpg" alt="Бренды" />
                </li>
                <li>
                    <img src="/images/homePage/brends/Favorite.jpg" alt="Бренды" />
                </li>
                <li>
                    <img src="/images/homePage/brends/Group 140.jpg" alt="Бренды" />
                </li>
                <li>
                    <img src="/images/homePage/brends/Maytoni.jpg" alt="Бренды" />
                </li>
                <li>
                    <img src="/images/homePage/brends/Nowodvorski.jpg" alt="Бренды" />
                </li>
                <li>
                    <img src="/images/homePage/brends/Odeon-light.jpg" alt="Бренды" />
                </li>
            </ul>
        </BrendsStyle>
    )
}

export default Brends;

const BrendsStyle = styled.section`
    h2 {
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
    }

    ul {
        margin-left: -15px;
        margin-right: -15px;
        display: flex;
        flex-wrap: wrap;
    }


    li {
        margin: 15px 15px;
        width: calc(33% - 30px);
        display: inline-block;
    }
`;