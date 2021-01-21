import React, { useEffect, useState } from 'react';
import { rootAPIsearch } from '../API/api';
import Layout from '../components/Layout/Layout';
import Search from '../components/Search/Search';
import Container from '../components/UI/Container';
import Prelouder from '../components/UI/Prelouder';

function search({ inputValue }) {

    const [goods, setGoods] = useState(null);
    const [showBtnMore, setShowMore] = useState(0);
    const [countShow, setCountShow] = useState(10);
    const [preloder, setPreloder] = useState(false);



    useEffect(() => {
        rootAPIsearch.getGoods(inputValue).then(response => {
            console.log(response);
            setGoods(response.goods);
            setShowMore(response.showBtnMore);
        })
        return () => {
            setCountShow(10)
        }
    }, [inputValue]);

    const showMore = () => {
        setPreloder(true);
        setCountShow(countShow + 10);

        rootAPIsearch.getGoods(inputValue, countShow).then(response => {
            setPreloder(false)
            setGoods([...goods, ...response.goods]);
            setShowMore(response.showBtnMore);
        })
    }

    return (
        <Layout title='Оформление заказа'>
            <Container>
                {goods !== null ? <Search goods={goods} textResponse={inputValue} showBtnMore={showBtnMore} showMore={showMore} preloder={preloder} /> : <Prelouder />}
            </Container>
        </Layout>

    )
}



export default search;



export async function getServerSideProps({ query }) {

    return {
        props: {
            inputValue: query.value
        }
    }
}

