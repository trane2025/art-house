import Layout from '../../../components/Layout/Layout';
import Container from '../../../components/UI/Container';
import CatalogDecor from '../../../components/pagesCatalog/CatalogDecor/CatalogDecor';
import { connect } from 'react-redux';
import { categoryToggleDecor, setCategoriesLinkParamPage } from '../../../store/redusersDecor/filterDecor';
import { useEffect, useState, useRef } from 'react';
import { setCardsDecor, setCardsDecorMore } from '../../../store/redusersDecor/cardsDecor';
import { rootAPIdecor } from '../../../API/api';
import { normalizeDecorParamPage } from '../../../normalaze/normalazeDecor';
import { initializeStore } from '../../../store/store';
import { setPrelouder } from '../../../store/reducers/prelouder';
import { setPaginator } from '../../../store/reducers/paginator';
import { useRouter } from 'next/router';





function decorParam({ query, title, filterDecor, cardsDecor, categoryToggleDecor, numberPage, selectOption, prelouder, setPrelouder, resolvedUrl }) {

    const router = useRouter();
    const url = `catalog/garda/${query}`;


    const [imageLoading, setImageLoding] = useState(false);
    const [option, setOption] = useState(selectOption);



    useEffect(() => {
        setOption(selectOption);
        setImageLoding(true);
        setPrelouder(true);
        setPrelouder(false);
    }, [query, numberPage])


    const onchangeOptions = (event) => {
        setPrelouder(true);
        setImageLoding(true);
        setOption(event.target.value);
        router.push({
            pathname: `/${url}`,
            query: { option: event.target.value, count: 1 }
        })
    }


    const toggleCategory = (id, typeCategory, open) => {
        categoryToggleDecor(id, typeCategory, open)
    }

    return (
        <Layout title={title} resolvedUrl={resolvedUrl}>
            <Container>
                <CatalogDecor
                    filter={filterDecor}
                    cards={cardsDecor}
                    title={title}
                    toggleCategory={toggleCategory}
                    onchangeOptions={onchangeOptions}
                    option={option}
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
    filterDecor: state.filterDecor,
    cardsDecor: state.cardsDecor,
    prelouder: state.prelouder
})

export default connect(mapStateToProps, { categoryToggleDecor, setPrelouder })(decorParam)

export async function getServerSideProps(context) {
    const { resolvedUrl } = context;
    const query = context.query.paramDecor;
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

    const res = await rootAPIdecor.getDecor(query, option, numberPage);

    const linkNormalize = normalizeDecorParamPage(res.catGoods, query);

    let title = linkNormalize.decorLink.entities.category[linkNormalize.activeCategoryId].title;

    if (linkNormalize.activeCategoryItemid && linkNormalize.activeCategoryItemChild === 0) {
        title = linkNormalize.decorLink.entities.categoryItems[linkNormalize.activeCategoryItemid].title;
    }
    else if (linkNormalize.activeCategoryItemChild) {
        title = linkNormalize.decorLink.entities.childsItems[linkNormalize.activeCategoryItemChild].title
    }

    dispatch(setCategoriesLinkParamPage(linkNormalize));
    dispatch(setCardsDecor(res.goods));
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


