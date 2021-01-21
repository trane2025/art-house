import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function BasketOrder({ basket, deleteProduct, onChangeHandler, numberWithSpaces }) {

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
        <BasketStyle clouseBasket={false} >
            <div className="basket-title container">
                <h3>Корзина</h3>
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
                                    <h4 className='title-product'>{product.title}</h4>

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
                </Allprice>}

        </BasketStyle>
    )
}


export default BasketOrder;

const Allprice = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;


    h4 {
        font-size: 24px;
        text-align: center;
        font-weight: 800; 
    }
`;

const BasketNull = styled.div`
    background: white;
    padding: 20px;
    p {
        text-align: center;
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

    .container-text {
        flex: 1;
    }

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
    border: 1px solid #EED6CD;
    width: 100%;
    background: #FFEFE9;
    z-index: 100;
    padding-bottom: 30px;

    .container {
        padding: 0 15px;
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

    .goods-container {
        
        max-height: 400px;
        overflow-y: scroll;
        ::-webkit-scrollbar { width: 0 !important }
    }

`;