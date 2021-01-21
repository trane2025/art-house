import Layout from '../../../components/Layout/Layout';
import Container from '../../../components/UI/Container';
import { connect } from 'react-redux';
import { setCategoriesLink, setCategoriesLinkParamPage, categoryToggle } from '../../../store/redusersLight/filterLight';
import { useEffect, useState } from 'react';
import { rootAPIsvet } from '../../../API/api';
import { setCardsLight, setCardsLightMore } from '../../../store/redusersLight/cardsLight';
import CatalogLight from '../../../components/pagesCatalog/CalalogLight/CatalogLight';

import { normalizeLightParamPage } from '../../../normalaze/normalazeLight';
import { initializeStore } from '../../../store/store';
import { useUpdateEffect } from '../../../useHooks';




function paramLight({ title, query, filterLight, cardsLight, setCardsLight, setCardsLightMore, categoryToggle }) {

    const [prelouder, setPrelouder] = useState(false);
    const [option, setOption] = useState(1);
    const [showNumber, setShowNumber] = useState(16);
    const [imageLoading, setImageLoding] = useState(false);

    const onchangeOptions = (event) => {
        setImageLoding(true);
        setShowNumber(16);
        setOption(event.target.value);
    }


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
    }, [query])


    const toggleCategory = (category, open) => {
        categoryToggle(category, open)
    }

    useUpdateEffect(() => {
        setPrelouder(true);
        rootAPIsvet.getLight(query, option).then(response => {
            setCardsLight(response.goods, response.showBtnMore);
            setPrelouder(false);
        })
    }, [option])

    const showMore = () => {
        setImageLoding(true);
        setPrelouder(true);
        setShowNumber(pre => pre + 16);

        rootAPIsvet.getLightMore(showNumber, option, query).then(response => {
            setCardsLightMore(response.goods, response.showBtnMore);
            setPrelouder(false);
        })
    }

    return (
        <Layout title={title}>
            <Container>
                <CatalogLight
                    filterLight={filterLight}
                    title={title}
                    cardsLight={cardsLight}
                    toggleCategory={toggleCategory}
                    onchangeOptions={onchangeOptions}
                    getGoodsMore={showMore}
                    prelouder={prelouder}
                    imageLoading={imageLoading}
                    option={option} />
            </Container>
        </Layout >
    )
}



const mapStateToProps = (state) => ({
    filterLight: state.filterLight,
    cardsLight: state.cardsLight
})



export async function getServerSideProps(context) {
    const query = context.query.paramLight;
    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;
    const res = await rootAPIsvet.getLight(query).then(response => {
        return response
    })

    const linkNormalize = await normalizeLightParamPage(res.catGoods, query);

    let title = '';

    if (linkNormalize.categoryItemId === 0) {
        title = linkNormalize.lightsArr.entities.category[linkNormalize.categoryId].title;
    }
    else {
        title = linkNormalize.lightsArr.entities.categoryItems[linkNormalize.categoryItemId].title;
    }

    const categoryId = linkNormalize.categoryId;
    const categoryItemId = linkNormalize.categoryItemId;

    dispatch(setCategoriesLinkParamPage(linkNormalize.lightsArr, categoryId, categoryItemId));
    dispatch(setCardsLight(res.goods, res.showBtnMore));

    return {
        props: {
            res,
            query,
            title,
            initialReduxState: reduxStore.getState()
        }
    }
}

export default connect(mapStateToProps, { setCategoriesLink, setCardsLight, setCardsLightMore, setCategoriesLinkParamPage, categoryToggle })(paramLight)



