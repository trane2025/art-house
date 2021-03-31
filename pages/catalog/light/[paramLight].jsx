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
import { setPaginator } from '../../../store/reducers/paginator';
import { setPrelouder } from '../../../store/reducers/prelouder';
import { useRouter } from 'next/router';




function paramLight({ title, query, filterLight, cardsLight, categoryToggle, numberPage, setPrelouder, prelouder, selectOption, resolvedUrl }) {

    const router = useRouter();
    const url = `catalog/light/${query}`;


    const [option, setOption] = useState(selectOption);
    const [imageLoading, setImageLoding] = useState(false);

    const onchangeOptions = (event) => {
        setPrelouder(true);
        setImageLoding(true);
        setOption(event.target.value);
        router.push({
            pathname: `/${url}`,
            query: { option: event.target.value, count: 1 }
        })
    }

    useEffect(() => {
        setOption(selectOption);
        setImageLoding(true);
        setPrelouder(true);
        setPrelouder(false);
    }, [query, numberPage])


    const toggleCategory = (category, open) => {
        categoryToggle(category, open)
    }




    return (
        <Layout title={title} resolvedUrl={resolvedUrl}>
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
                    url={url}
                    setPrelouder={setPrelouder} />
            </Container>
        </Layout >
    )
}



const mapStateToProps = (state) => ({
    filterLight: state.filterLight,
    cardsLight: state.cardsLight,
    prelouder: state.prelouder
})



export async function getServerSideProps(context) {

    const { resolvedUrl } = context;

    const query = context.query.paramLight;
    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;

    let numberPage = 1;
    let option = 1;

    if (context.query.count) {
        numberPage = context.query.count;
    }

    if (context.query.option) {
        option = context.query.option;
    }

    const res = await rootAPIsvet.getLight(query, option, numberPage)

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
            selectOption: option,
            query,
            title,
            resolvedUrl,
            initialReduxState: reduxStore.getState()
        }
    }
}

export default connect(mapStateToProps, { setCategoriesLink, setCardsLight, setCategoriesLinkParamPage, categoryToggle, setPrelouder })(paramLight)



