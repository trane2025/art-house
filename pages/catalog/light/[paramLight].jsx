import Layout from '../../../components/Layout/Layout';
import Container from '../../../components/UI/Container';
import { connect } from 'react-redux';
import { setCategoriesLink, setCategoriesLinkParamPage, categoryToggle } from '../../../store/redusersLight/filterLight';
import { useEffect, useState } from 'react';
import { rootAPIsvet } from '../../../API/api';
import { setCardsLight } from '../../../store/redusersLight/cardsLight';
import CatalogLight from '../../../components/pagesCatalog/CalalogLight/CatalogLight';

import { normalizeLightParamPage } from '../../../normalaze/normalazeLight';
import { initializeStore } from '../../../store/store';
import { useUpdateEffect } from '../../../useHooks';
import { setPaginator } from '../../../store/reducers/paginator';




function paramLight({ title, query, filterLight, cardsLight, setCardsLight, categoryToggle, res, numberPage }) {


    const url = `catalog/light/${query}`;

    const [prelouder, setPrelouder] = useState(false);
    const [option, setOption] = useState(1);
    const [imageLoading, setImageLoding] = useState(false);

    const onchangeOptions = (event) => {
        setImageLoding(true);
        setOption(event.target.value);
    }


    useEffect(() => {
        setOption(1);
        setImageLoding(true);
        setPrelouder(true);
        setTimeout(() => {
            setPrelouder(false);
        }, 500);

    }, [query, numberPage])


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


    return (
        <Layout title={title}>
            <Container>
                <CatalogLight
                    filterLight={filterLight}
                    title={title}
                    cardsLight={cardsLight}
                    toggleCategory={toggleCategory}
                    onchangeOptions={onchangeOptions}
                    prelouder={prelouder}
                    imageLoading={imageLoading}
                    option={option}
                    pagination={res}
                    url={url} />
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

    let numberPage = 1;

    if (context.query.count) {
        numberPage = context.query.count;
    }

    const res = await rootAPIsvet.getLight(query, '1', numberPage)

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
    dispatch(setCardsLight(res.goods));
    dispatch(setPaginator(res));

    return {
        props: {
            numberPage,
            res,
            query,
            title,
            initialReduxState: reduxStore.getState()
        }
    }
}

export default connect(mapStateToProps, { setCategoriesLink, setCardsLight, setCategoriesLinkParamPage, categoryToggle })(paramLight)



