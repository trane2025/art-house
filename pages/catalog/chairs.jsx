import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { rootAPI } from '../../API/api';
import Catalog from '../../components/Layout/Catalog';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/UI/Container';
import { setGoods, setGoodsMore } from '../../store/reducers/cardsGoods';
import { sortPage } from '../../store/reducers/pageLinks';
import { initializeStore } from '../../store/store';
import { useUpdateEffect } from '../../useHooks';




function tables({ query, title, cardsGoods, setGoods, setGoodsMore }) {

    const { asPath } = useRouter();

    const linksGoods = sortPage(query)

    const [showNumber, setShowNumber] = useState(12);
    const [prelouder, setPrelouder] = useState(false);
    const [option, setOption] = useState(1);
    const [imageLoading, setImageLoding] = useState(false);

    useEffect(() => {
        setOption(1);
        setPrelouder(true);
        setImageLoding(true);
        setTimeout(() => {
            setPrelouder(false);
        }, 500)
        return () => {
            setShowNumber(12);
        }
    }, [])

    const onchangeOptions = (event) => {
        setShowNumber(12);
        setOption(event.target.value);
    }


    useUpdateEffect(() => {
        setImageLoding(true)
        setPrelouder(true);
        rootAPI.getGoods(query, option).then(response => {
            setGoods(response.goods, response.showBtnMore);
            setPrelouder(false)
        })
    }, [option]);


    const getGoodsMore = () => {
        setImageLoding(true);
        setPrelouder(true)
        setShowNumber(pre => pre + 12);

        rootAPI.getGoodsMore(query, option, showNumber).then(response => {
            setGoodsMore(response.goods, response.showBtnMore);
            setPrelouder(false);
        })
    }



    return (
        <Layout title={title}>
            <Container>
                <Catalog
                    typeGoodLinks={linksGoods}
                    title={title}
                    linkRoute={asPath}
                    cardsGoods={cardsGoods}
                    getGoodsMore={getGoodsMore}
                    prelouder={prelouder}
                    onchangeOptions={onchangeOptions}
                    imageLoading={imageLoading}
                />
            </Container>
        </Layout >
    )
}

const mapStateToProps = (state) => ({
    cardsGoods: state.cardsGoods
})

export default connect(mapStateToProps, { setGoods, setGoodsMore })(tables);

export async function getServerSideProps() {
    const title = 'Стулья';
    const query = 'chairs';

    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;

    const res = await rootAPI.getGoods(query, '');

    dispatch(setGoods(res.goods, res.showBtnMore));

    return {
        props: {
            query,
            title,
            initialReduxState: reduxStore.getState()
        }
    }
}