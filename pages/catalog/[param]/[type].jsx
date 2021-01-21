import { connect } from 'react-redux';
import Container from '../../../components/UI/Container';
import Catalog from '../../../components/Layout/Catalog';
import Layout from '../../../components/Layout/Layout';
import { useEffect, useState, useRef } from 'react';
import { rootAPI } from '../../../API/api';
import { setGoodsMore, setGoods } from '../../../store/reducers/cardsGoods';
import { sortPage } from '../../../store/reducers/pageLinks';
import { initializeStore } from '../../../store/store';





function TypePage({ pageType, link, setGoods, cardsGoods, setGoodsMore, res }) {

    let initializationCount = useRef(0);


    const [imageLoading, setImageLoding] = useState(false);
    const [prelouder, setPrelouder] = useState(false);
    const [showNumber, setShowNumber] = useState(12);

    const [option, setOption] = useState(1);

    useEffect(() => {
        setOption(1);
        setImageLoding(true);
        setPrelouder(true);
        setTimeout(() => {
            setPrelouder(false);
        }, 500);

        return () => {
            setShowNumber(16);
        }
    }, [res])

    const onchangeOptions = (event) => {
        setShowNumber(12);
        setOption(event.target.value);
    }


    useEffect(() => {
        if (initializationCount.current) {
            setPrelouder(true);
            setImageLoding(true);
            rootAPI.getGoods(pageType, option, link.type).then(response => {
                setGoods(response.goods, response.showBtnMore);
                setPrelouder(false);
            })
        }

    }, [option])

    const getGoodsMore = () => {
        setImageLoding(true);
        setPrelouder(true)
        setShowNumber(pre => pre + 12);
        rootAPI.getGoodsMore(pageType, option, showNumber, link.type).then(response => {
            setGoodsMore(response.goods, response.showBtnMore);
            setPrelouder(false);
        })
    }

    useEffect(() => {
        initializationCount.current = 1
    }, [])



    return (
        <Layout >
            <Container>
                <Catalog
                    title={link && link.label}
                    prelouder={prelouder}
                    cardsGoods={cardsGoods}
                    getGoodsMore={getGoodsMore}
                    onchangeOptions={onchangeOptions}
                    imageLoading={imageLoading} />
            </Container>
        </Layout >
    )
}

const mapStateToProps = (state) => ({
    cardsGoods: state.cardsGoods
})

export default connect(mapStateToProps, { setGoods, setGoodsMore })(TypePage);

export async function getServerSideProps({ query }) {

    const pageType = query.param;
    const typeGoodLinks = sortPage(pageType);
    const link = typeGoodLinks.find(link => link.href === query.type);

    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;


    const res = await rootAPI.getGoods(pageType, '', link.type);

    dispatch(setGoods(res.goods, res.showBtnMore));

    return {
        props: {
            pageType,
            link,
            res,
            initialReduxState: reduxStore.getState()
        }
    }
}
