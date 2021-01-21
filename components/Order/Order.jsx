import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import { rootAPIorder } from '../../API/api';
import BasketContainer from '../Basket/BasketContainer';
import Button from '../UI/Button';
import Input from '../UI/Input';
import InputPhoneMask from '../UI/InputPhoneMask';
import Prelouder from '../UI/Prelouder';
import TextArea from '../UI/TextArea';


function Order({ basket, removeBasket }) {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [phone, setPhone] = useState('');

    const [prelouder, setPrelouder] = useState(false)

    const postOrder = (event) => {
        event.preventDefault();


        if (basket.goods.length === 0) {
            alert('Корзина пуста')
            return
        }

        if ('' === phone) {
            alert('Вы не указали телефон')
            return
        }

        if ('' === name) {
            alert('Вы не указали имя')
            return
        }

        const goods = basket.goods.map(item => {
            return {
                id: item.id,
                article: item.article,
                title: item.title,
                price: item.price,
                quantity: item.productCount,
                shop: item.shop
            }
        });

        const userData = {
            email: email,
            phone: phone,
            city: city,
            name: name,
            comment: comment
        }

        const order = {
            userData,
            goods
        }

        setPrelouder(true)

        const orderJson = JSON.stringify(order);

        rootAPIorder.postOrder(orderJson).then(response => {
            removeBasket();
            alert('Ваш заказ принят');
            setPrelouder(false);
            router.replace('/');
        })



    }
    return (
        <>
            {prelouder
                ? <Prelouder />


                : <StyleOrder>
                    <div className="container-form">
                        <h1>Оформление заказа</h1>
                        <form onSubmit={event => postOrder(event)}>
                            <div className="container-input">
                                <div className="row-input">
                                    <Input type='text' label='ФИО' placeholder='Укажите ваше ФИО' value={name} onChange={event => setName(event.target.value)} />
                                    <InputPhoneMask type='text' label='Телефон' placeholder='+7 (___) ___ ____' value={phone} onChange={event => setPhone(event.target.value)} />
                                </div>
                                <div className="row-input">
                                    <Input type='text' label='Email' placeholder='Укажите ваш Email' value={email} onChange={event => setEmail(event.target.value)} />
                                    <Input type='text' label='Адрес доставки' placeholder='Укажите ваш адрес' value={city} onChange={event => setCity(event.target.value)} />
                                </div>
                            </div>
                            <TextArea label='Ваш комментарий' placeholder='Оставьте ваш комментарий' value={comment} onChange={event => setComment(event.target.value)} />
                            <Button type='submit'>Оформить заказ</Button>
                        </form>
                    </div>
                    <Basket>
                        <BasketContainer order />
                    </Basket>
                </StyleOrder>}
        </>
    )
}

export default Order;

const Basket = styled.div`
    margin-left: 30px;
    margin-top: 20px;
    width: 100%;
`;

const StyleOrder = styled.div`
    display: flex;

    .container-input {
        display: flex;
        justify-content: space-between;
    }

    form {
        margin-top: 30px;
        width: 740px;
    } 

    h1 {
        font-size: 36px;
        text-transform: uppercase;
        font-family: 'PT Serif';
        letter-spacing: 0.1em;
        color: #562F2F;
        margin-top: 50px;
    }
`;
