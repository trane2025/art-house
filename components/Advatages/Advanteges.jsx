import React from 'react';
import styled from 'styled-components';


function Advanteges() {
    return (
        <AdvantagesStyle>
            <li>
                <img src="/icon/home-page/money card.svg" alt="Иконка" />
                <p>При покупке на сумму от 15 000 ₽ доставка бесплатна</p>
            </li>

            <li>
                <img src="/icon/home-page/time-To-return.svg" alt="Иконка" />
                <p>14 дней на возврат <br /> и обмен</p>
            </li>

            <li>
                <img src="/icon/home-page/certificate.svg" alt="Иконка" />
                <p>Весь товар сертифицирован</p>
            </li>

            <li>
                <img src="/icon/home-page/delivery.svg" alt="Иконка" />
                <p>Доставка на дом</p>
            </li>
        </AdvantagesStyle>
    )
}

export default Advanteges;

const AdvantagesStyle = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;

    li {
        width: 270px;
        height: 167px;
        background: #FBEDE6;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 35px;
        margin: 15px;
        width: calc(25% - 30px);
    }

    p {
        font-size: 16px;
        text-align: center;
        font-weight: 600;
        color: #95575A;
        margin-top: 10px;
    }


`;