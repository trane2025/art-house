import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setProductBasket, setToggleBasket } from '../../store/reducers/basket';
import Basket from './Basket';
import BasketOrder from './BasketOrder';

const BasketContainer = (props) => {




    useEffect(() => {
        const checkBasket = localStorage.getItem('basket');

        if (!checkBasket) {
            localStorage.setItem('basket', '{}');
        }

    }, [])


    useEffect(() => {
        let arr = JSON.parse(localStorage.getItem('basket'));

        const basketArr = Object.keys(arr).map(key => {
            return arr[key];
        })
        props.setProductBasket(basketArr);
    }, [props.resolvedUrl]);


    const deleteProduct = (title, id) => {
        let arr = JSON.parse(localStorage.getItem('basket'));
        delete arr[`basket-${title}-${id}`];

        localStorage.setItem('basket', JSON.stringify(arr));

        const arrProducts = Object.keys(arr).map(key => {
            return arr[key];
        })

        props.setProductBasket(arrProducts);
    }

    const onChangeHandler = (count, title, id) => {

        let arr = JSON.parse(localStorage.getItem('basket'));
        arr[`basket-${title}-${id}`].productCount = count;
        localStorage.setItem('basket', JSON.stringify(arr));

        const arrProducts = Object.keys(arr).map(key => {
            return arr[key];
        })

        props.setProductBasket(arrProducts);
    }

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }



    return (
        <>
            {props.order

                ? <BasketOrder  {...props} deleteProduct={deleteProduct} onChangeHandler={onChangeHandler} numberWithSpaces={numberWithSpaces} />

                : <Basket {...props} deleteProduct={deleteProduct} onChangeHandler={onChangeHandler} numberWithSpaces={numberWithSpaces} />}
        </>

    )



}

const mapStateToProps = (state) => ({
    basket: state.basket
})


export default connect(mapStateToProps, { setProductBasket, setToggleBasket })(BasketContainer);

