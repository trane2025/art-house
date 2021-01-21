import React from 'react';
import Layout from '../components/Layout/Layout';
import Order from '../components/Order/Order';
import Container from '../components/UI/Container';
import { connect } from 'react-redux';
import { removeBasket } from '../store/reducers/basket';

function order({ basket, removeBasket }) {

    return (
        <Layout title='Оформление заказа'>
            <Container>
                <Order basket={basket} removeBasket={removeBasket} />
            </Container>
        </Layout>
    )
}


const mapStateToProps = (state) => ({
    basket: state.basket
})

export default connect(mapStateToProps, { removeBasket })(order);


