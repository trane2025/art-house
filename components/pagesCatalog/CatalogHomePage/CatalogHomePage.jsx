import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setProductBasket } from '../../../store/reducers/basket';

function CatalogHomePage({ picture, price, title, id, basket, setProductBasket, productArr, stokBalance }) {

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


    const getProduct = () => {

        let arr = JSON.parse(localStorage.getItem('basket'));
        arr[BASKET_KEY] = { ...productArr, productCount: 1, picture };

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



    return (
        <Container>
            <div className="goods-image__wraper">
                <img src={picture} alt="товар home-Page" />
            </div>
            <h4>{title}</h4>
            <p className="price-goods">{`${price} ₽`}</p>
            <div className="btn-goods__wraper">
                <Buttons btnSuccess={btnSuccess} >
                    <button className='btn-add btn' onClick={() => { getProduct() }}>В корзину</button>
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
                {stokBalance && <StockBalance>{stokBalance === "0" ? 'Нет в наличии' : `Остаток поставщика: ${stokBalance}`}</StockBalance>}
            </div>

        </Container>
    )
}

const mapStateToProps = (state) => ({
    basket: state.basket
})



export default connect(mapStateToProps, { setProductBasket })(CatalogHomePage);

const StockBalance = styled.p`
    text-align: center;
    font-size: 12px;
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

const Container = styled.li`

    background: white;
    margin: 0 15px;
    width: calc(25% - 30px);
    padding:30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    h4 {
        text-align: center;
        margin: 10px 0;
        font-family: 'PT Serif';
        font-size: 14px;
        color: #562F2F;
        font-weight: 700;
        pointer-events: auto;
        cursor: pointer;
    }

    .goods-image__wraper {

        max-height: 150px;

            img {
            max-height: 150px;
            width: auto;
            max-width: 100%; 
        }
    }

    .price-goods {
        font-weight: 800;
        font-size: 18px;
        margin: 5px;
    }

    .btn-goods__wraper {
        margin-top: 5px;
        width: 100%;
    }
    
`;
