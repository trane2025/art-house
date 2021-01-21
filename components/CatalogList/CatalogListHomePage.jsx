import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { connect } from 'react-redux';
import { addProductBasket, deleteProductBasket, setProductBasket } from '../../store/reducers/basket';

function CardsListHomePage({ href, image, title, article, country, price, material, productArr, setProductBasket, deleteProductBasket, basket, addProductBasket }) {

    const BASKET_KEY = `basket-${title}`

    const activeBtn = () => {
        let keys = Object.keys(localStorage);
        const findKey = keys.find(key => key === BASKET_KEY);
        return !!findKey;
    }


    useEffect(() => {
        const keys = Object.keys(localStorage);
        const findKey = keys.find(key => key === BASKET_KEY);

        if (!findKey) {
            setBtnSuccess(false);
        }

    }, [basket])



    const [btnSuccess, setBtnSuccess] = useState(activeBtn());
    const [descriptionBtn, setDescriptionBtn] = useState('В корзине')





    const getProduct = arr => {
        const arrAddCount = { ...arr, productCount: 1 };
        const arrString = JSON.stringify(arrAddCount);
        localStorage.setItem(BASKET_KEY, arrString);
        setBtnSuccess(true);
        addProductBasket(arrAddCount);
    }

    const deleteProduct = () => {
        localStorage.removeItem(BASKET_KEY);
        setBtnSuccess(false);
        deleteProductBasket();
    }

    return (

        <Card>
            <div className="container-img">
                <img className="img-card" src={image ? image : '/images/noPhoto.jpg'} alt="нет картинки" />
            </div>

            <ul className="wraper-content__list">
                <Link href={href}>
                    <a>
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

                {price !== '0' && <li className="wraper-content__item">
                    <p className='price-card'>{`${price} ₽`}</p>
                </li>}
            </ul>
            <Buttons btnSuccess={btnSuccess} >
                <button className='btn-add btn' onClick={() => { getProduct(productArr) }}>В корзину</button>
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
        </Card>
    )
}

const mapStateToProps = (state) => ({
    basket: state.basket
})

export default connect(mapStateToProps, { setProductBasket, deleteProductBasket, addProductBasket })(CardsListHomePage);



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
        cursor: pointer;
        transition-duration: .3s;
        background:  #FFEFE9;
        letter-spacing: 0.02em;
    }

    .btn-add {
        display: ${props => props.btnSuccess ? 'none' : 'block'};

        :hover {
            background:  #FFD9AF;
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

    :hover {
        box-shadow: 0px 0px 15px #e0d8d0;
    }
    
    a{
        color: #562F2F;
        word-break: break-word; 
    }

    .title-card{
        font-family: 'PT Serif';
        font-size: 14px;
        color: #562F2F;
        font-weight: 700;
    }

    .option-card {
        color: #918b88;
    }

    .price-card {
        font-weight: 800;
        font-size: 18px;
    }

    

    .container-img {
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
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
