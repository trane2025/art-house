import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function Basket({ basket, setToggleBasket, deleteProduct, onChangeHandler, numberWithSpaces }) {

    const inc = (value) => {
        return +value + 1
    }

    const dec = value => {
        if (+value <= 1) {
            return 1
        }
        else return +value - 1
    }

    return (
        <BasketStyle clouseBasket={basket.clouseBasket} >
            <div className="basket-title container">
                <h3>Корзина</h3>
                <i className='basket-clouse' onClick={() => { setToggleBasket(true) }}>
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.22813" y1="1.94727" x2="11" y2="11.7191" stroke="#562F2F" strokeWidth="1.73684" strokeLinecap="round" />
                        <line x1="11" y1="2.01768" x2="1.22813" y2="11.7896" stroke="#562F2F" strokeWidth="1.73684" strokeLinecap="round" />
                    </svg>
                </i>
            </div>

            <ul className='container goods-container'>
                {basket.goods.length
                    ? basket.goods.map((product, index) => {


                        const imagegProduct = product.picture.split(';')
                        return (
                            <Product key={index}>

                                <i className='product-clouse' onClick={() => { deleteProduct(product.title, product.id) }}>
                                    <svg width="10" height="10" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="1.22813" y1="1.94727" x2="11" y2="11.7191" stroke="#562F2F" strokeWidth="1.73684" strokeLinecap="round" />
                                        <line x1="11" y1="2.01768" x2="1.22813" y2="11.7896" stroke="#562F2F" strokeWidth="1.73684" strokeLinecap="round" />
                                    </svg>
                                </i>

                                <div className="container-text">
                                    <Link href={`/catalog/${product.shop}/product/${product.id}`}>
                                        <a>
                                            <h4 className='title-product'>{product.title}</h4>
                                        </a>
                                    </Link>


                                    <div className="wraper-price">
                                        <div className="container-price">
                                            <p className='price-product'>{`${numberWithSpaces(product.price)} руб.`}</p>
                                        </div>
                                        <div className="count-price">
                                            <p className='count count-minus' onClick={() => { onChangeHandler(dec(product.productCount), product.title, product.id) }}>-</p>
                                            <p className='count-value'>{product.productCount}</p>
                                            <p className='count count-plus' onClick={() => { onChangeHandler(inc(product.productCount), product.title, product.id) }}>+</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-image">
                                    <img src={imagegProduct[0]} alt="нет фото" />
                                </div>
                            </Product>
                        )
                    })
                    :
                    <BasketNull>
                        <p>Корзина пуста, давайте исправим это =)</p>
                    </BasketNull>}
            </ul>
            {basket.goods.length !== 0 &&

                <Allprice>
                    <h4>{`Сумма ${numberWithSpaces(basket.countPrice)} руб`}</h4>
                    <Link href="/order">
                        <a>
                            <button onClick={() => { setToggleBasket(true) }}>Оформление заказа</button>
                        </a>
                    </Link>
                </Allprice>}

        </BasketStyle>
    )
}


export default Basket;

const BasketNull = styled.div`
    background: white;
    padding: 20px;
    p {
        text-align: center;
    }
`;

const Allprice = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;


    h4 {
        font-size: 24px;
        text-align: center;
        font-weight: 800; 
    }

    button {
        background: #5B1717;
        border-radius: 50px;
        padding: 15px 35px;
        color: white;
        border: none;
        cursor: pointer;
        margin-top: 20px;
        letter-spacing: 0.03em;
    }
`;

const Product = styled.li`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    background: white;
    padding: 15px 20px;
    animation-name: showBasket;
    animation-duration: .5s;
    position: relative;

    .product-clouse {
        cursor: pointer;
        position: absolute;
        right: 6px;
        top: 0;
        user-select: none;
    }

    @keyframes showBasket{
        0% {
            opacity: 0;
        }
        100%{
            opacity: 100%
        }
    }

    .count {
        font-size: 18px;
        font-weight: 800;
        font-family: 'Open Sans';
    }

    .count-value {
        margin-left: 5px;
        margin-right: 5px;
        font-size: 14px;
        font-weight: 800;
    }

    .count-minus {
        position: relative;
        bottom: 1px;
        cursor: pointer;
    }

    .count-plus {
        cursor: pointer;
    }

    .wraper-price {
        display: flex;
        margin-top: 10px;
    }

    .count-price {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 65px;
        height: 30px;
        background: #FBD2A4;
        border-radius: 50px;
        margin-left: 15px;
        user-select: none;

        input {
            width: 25px;
            text-align: center;
            border: none;
            background: #FBD2A4;
        }
    }

    .price-product {
        margin-top: 5px;
        font-weight: 900;
        font-size: 16px;
    }

    .title-product {
        font-size: 14px;
        line-height: 19px;
        font-weight: 600;
        color: #562F2F;
    }

    .container-image {
        width: 90px;
        height: 90px;
        max-height: 90px;
        min-width: 90px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        border: 1px solid #EED6CD;
        margin-left: 15px;
    }

    img {
        max-height: 70px;
        width: auto;
        margin: auto;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
     margin: 0;
    }
 
    input[type=number] {
    -moz-appearance:textfield;
    }
`;

const BasketStyle = styled.div`
    transition-duration: .5s;
    position: fixed;
    right: ${props => props.clouseBasket ? '-400px' : '0'};
    width: 350px;
    height: 100%;
    background: #FFEFE9;
    z-index: 100;
    box-shadow: 0px 0px 40px rgba(59, 22, 22, 0.5);

    .container {
        padding: 0 10px;
    }

    h3 {
        text-transform: uppercase;
        font-family: 'PT Serif';
        letter-spacing: 0.1em;
        flex: 1;
        font-size: 24px;
    }

    .basket-title {
        display: flex;
        align-items: center;
        padding: 30px 30px;
    }

    .basket-clouse {
        user-select: none;
        cursor: pointer;
        right: 30px;
        font-size: 18px;
    }

    .goods-container {
        max-height: 520px;
        overflow-y: scroll;
        ::-webkit-scrollbar { width: 0 !important }
    }

`;