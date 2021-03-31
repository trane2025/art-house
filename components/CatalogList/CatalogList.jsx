import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { connect } from 'react-redux';
import { setProductBasket } from '../../store/reducers/basket';
import PrelouderImage from '../UI/PrelouderImage';

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function CardsList({ href, image, title, article, country, price, material, productArr, basket, id, setProductBasket, sale, oldPrice, saleStyle, imageLoading, stokBalance }) {


    const BASKET_KEY = `basket-${title}-${id}`
    useEffect(() => {

        const activeBtn = () => {
            const arr = JSON.parse(localStorage.getItem('basket'));
            let keys = Object.keys(arr);
            const findKey = keys.find(key => key === BASKET_KEY);
            return !!findKey;
        }

        setBtnSuccess(activeBtn())

    }, [basket])



    const [btnSuccess, setBtnSuccess] = useState(false);
    const [descriptionBtn, setDescriptionBtn] = useState('В корзине');

    const [prelouderImg, setPrelouderImg] = useState(imageLoading);


    const changePrelouder = () => {
        setPrelouderImg(false)
    }


    const getProduct = () => {

        let arr = JSON.parse(localStorage.getItem('basket'));
        arr[BASKET_KEY] = { ...productArr, productCount: 1, picture: image };

        localStorage.setItem('basket', JSON.stringify(arr));

        const arrAddCount = Object.keys(arr).map(key => {
            return arr[key];
        })

        setProductBasket(arrAddCount);
        setBtnSuccess(true);
    }

    const deleteProduct = () => {

        let arr = JSON.parse(localStorage.getItem('basket'));
        delete arr[BASKET_KEY];

        localStorage.setItem('basket', JSON.stringify(arr));

        const arrAddCount = Object.keys(arr).map(key => {
            return arr[key];
        })

        setProductBasket(arrAddCount);
        setBtnSuccess(false);
    }

    const [noneProduct, setNoneProduct] = useState('')

    return (

        <Card noneProduct={noneProduct === 'Ошибка'}>
            {sale && !saleStyle && <Sale>
                <p>{Math.round(100 - price * 100 / oldPrice)} %</p>
            </Sale>}
            {sale && saleStyle && <SaleAction>
                <img src="/images/catalog/shape-New-Year.png" alt="new-year" />

                <p>{Math.round(100 - price * 100 / oldPrice)}<span> %</span></p>

            </SaleAction>}
            <Link href={href}>
                <a>
                    <div className="container-img">
                        {prelouderImg && noneProduct !== 'Ошибка' && <PrelouderImage />}
                        <img className="img-card" src={noneProduct !== 'Ошибка' ? image : '/images/noProduct.jpg'} onLoad={changePrelouder} onError={() => { setNoneProduct('Ошибка') }} alt="нет картинки" />
                    </div>
                </a>
            </Link>


            <ul className="wraper-content__list">
                <Link href={href}>
                    <a className='link-card'>
                        <li className="wraper-content__item">
                            <h4 className='title-card'>{title}</h4>
                        </li>
                    </a>
                </Link>

                {article && <li className="wraper-content__item">
                    <p className='option-card'>{`Артикул: ${article}`}</p>
                </li>}

                {country && <li className="wraper-content__item">
                    <p className='option-card'>{`Страна: ${country}`}</p>
                </li>}

                {material && <li className="wraper-content__item">
                    <p className='option-card'>{`Материал: ${material}`}</p>
                </li>}

                {!!+oldPrice && <li className="wraper-content__item">
                    <p className='old-price-card'>{`${numberWithSpaces(oldPrice)} ₽`}</p>
                </li>}

                {!!+price && <li className="wraper-content__item">
                    <p className='price-card'>{`${numberWithSpaces(price)} ₽`}</p>
                </li>}
            </ul>
            <Buttons noneProduct={noneProduct === 'Ошибка'} btnSuccess={btnSuccess} >
                <button disabled={noneProduct === 'Ошибка'} className='btn-add btn' onClick={() => { getProduct() }}>В корзину</button>
                <button
                    className='btn-success btn'
                    onMouseOver={() => { setDescriptionBtn('Убрать') }}
                    onClick={() => { deleteProduct() }}
                    onMouseOut={() => { setDescriptionBtn('В корзине') }}>

                    {descriptionBtn !== 'Убрать' ? <i className='icon-btn'>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.00012 7.3139L4.81387 10.1279L10.1279 4.8139" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </i> : null}

                    {descriptionBtn}
                </button>
            </Buttons>
            {stokBalance && <p className='stok-balance'>{stokBalance === "0" ? 'Нет в наличии' : `Остаток поставщика: ${stokBalance}`}</p>}
        </Card >
    )
}

const mapStateToProps = (state) => ({
    basket: state.basket
})

export default connect(mapStateToProps, { setProductBasket })(CardsList);

const SaleAction = styled.div`
    position: absolute;
    top: 0;
    z-index: 2;

    p {
        width: 43px;
        height: 43px;
        font-size: 14px;
        font-weight: 800;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 20px;
        color: white;
    }

    span {
        font-size: 10px;
        margin-left: 2px;
        font-weight: 800;
    }
`;

const Sale = styled.div`
    position: absolute;
    width:46px;
    height:46px;
    background-color: #FBD2A4;
    border-radius: 50%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 15px;
    left: 15px;
    p {
        font-weight: 900;
        font-size: 14px;
    }
`;

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    margin: 15px;

    .btn {
        width: 100%;
        border-radius: 50px;
        border: none;
        padding: 12px;
        color: #5B1717;
        font-weight: 600;
        font-size: 14px;
        cursor: ${props => props.noneProduct ? 'default' : 'pointer'};
        transition-duration: .3s;
        background:  #FFEFE9;
        letter-spacing: 0.02em;
    }

    .btn-add {
        display: ${props => props.btnSuccess ? 'none' : 'block'};

        :hover {
            background: ${props => props.noneProduct ? '#FFEFE9' : '#FFD9AF'};
        }
    }

    .btn-success {
        color: white;
        background: #0B8F30;
        display: ${props => props.btnSuccess ? 'block' : 'none'};

        :hover {
            background:#5B1717;
        }

        .icon-btn {
            margin-right: 5px;
        }
    }
`;

const Card = styled.li`
    padding: 15px;
    box-shadow: 0 0 0 1px #EED6CD inset;
    margin: -1px -1px 0 0;
    width: 25%;
    min-width: 218px;
    transition: 2s;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .stok-balance {
        text-align: center;
        font-size: 12px;
    }

    :hover {
        box-shadow: 0px 0px 15px #e0d8d0;
    }
    
    a{
        word-break: break-word;
        pointer-events: ${props => props.noneProduct ? 'none' : 'auto'};
        cursor: ${props => props.noneProduct ? 'default' : 'pointer'};
    }

    .link-card {
        pointer-events: none;
        cursor: default;
    }

    .title-card{
        font-family: 'PT Serif';
        font-size: 14px;
        color: #562F2F;
        font-weight: 700;
        pointer-events: ${props => props.noneProduct ? 'none' : 'auto'};
        cursor: ${props => props.noneProduct ? 'default' : 'pointer'};
    }

    .option-card {
        color: #918b88;
    }

    .price-card {
        font-weight: 800;
        font-size: 18px;
    }

    .old-price-card {
        text-decoration: line-through;
        font-weight: 600;
        font-size: 14px;
        text-decoration-color: #be1212;
        color: #7a7a7a;
    }

    .container-img {
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background-color: white;
    }

    .img-card {
        position: absolute;
        margin: 0 auto;
        max-height: 150px;
        width: auto;
        max-width: 100%;
    }

    .wraper-content__list {
        width: auto;
        text-align: center;
        margin: auto;
    }

    .wraper-content__item {
        margin: 5px 0;
        font-size: 12px;
    }
    
`;
