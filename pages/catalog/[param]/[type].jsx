import { connect } from 'react-redux';
import Container from '../../../components/UI/Container';
import Catalog from '../../../components/Layout/Catalog';
import Layout from '../../../components/Layout/Layout';
import { useEffect, useState, useRef } from 'react';
import { rootAPI } from '../../../API/api';
import { setGoods } from '../../../store/reducers/cardsGoods';
import { initializeStore } from '../../../store/store';
import { setPaginator } from '../../../store/reducers/paginator';
import { setPrelouder } from '../../../store/reducers/prelouder';
import { useRouter } from 'next/router';
import { setPageLinks } from '../../../store/reducers/pageLinks';
import { setBreadCrubs } from '../../../store/reducers/breadCrumbs';
import { setFilter } from '../../../store/reducers/filter';
import { normalizeFilter } from '../../../normalaze/normalazeFilter';
import axios from 'axios';





function TypePage({ pageType, cardsGoods, setPrelouder, prelouder, selectOption, query, resolvedUrl, pageLinks, breadCrumbs, titlePage }) {

    const router = useRouter();
    const urlLink = `catalog/${pageType}`;
    const url = `catalog/${pageType}/${query}`;

    const [imageLoading, setImageLoding] = useState(false);



    const [option, setOption] = useState(selectOption);

    useEffect(() => {
        setImageLoding(true);
        setPrelouder(true);
        setTimeout(() => {
            setPrelouder(false);
        }, 500)
    }, [query])

    const onchangeOptions = (event) => {
        setPrelouder(true);
        setImageLoding(true);
        setOption(event.target.value);
        router.push({
            pathname: `/${url}`,
            query: { ...router.query, option: event.target.value, count: 1 }
        })
    }



    return (
        <Layout resolvedUrl={resolvedUrl} title={titlePage}>
            <Container>
                <Catalog
                    prelouder={prelouder}
                    cardsGoods={cardsGoods}
                    onchangeOptions={onchangeOptions}
                    imageLoading={imageLoading}
                    option={option}
                    url={url}
                    urlLink={urlLink}
                    setPrelouder={setPrelouder}
                    pageLinks={pageLinks}
                    activeUrl={query}
                    breadCrumbs={breadCrumbs}
                    title={titlePage}
                />
            </Container>
        </Layout >
    )
}

const mapStateToProps = (state) => ({
    cardsGoods: state.cardsGoods,
    prelouder: state.prelouder,
    pageLinks: state.pageLinks,
    breadCrumbs: state.breadCrumbs
})

export default connect(mapStateToProps, { setPrelouder })(TypePage);

export async function getServerSideProps({ query, resolvedUrl }) {

    const pageType = query.param;

    let numberPage = 1;
    let option = 1;
    let page = '';
    let filterQuery = '';

    if (query.filter) {
        filterQuery = query.filter
    }

    if (query.param === 'tables') {
        page = 'Столы'
    }
    else page = 'Стулья'

    if (query.count) {
        numberPage = query.count;
    }

    if (query.option) {
        option = query.option;
    }

    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;




    const res = await rootAPI.getGoods(pageType, option, query.type, numberPage, filterQuery);

    const titlePage = res.catGoods.find(item => item.url === query.type);

    const filter = res.filter;

    dispatch(setFilter(normalizeFilter(filter)));



    const breadCrumbsArr = [
        {
            title: 'Главная',
            path: '/'
        },
        {
            title: page,
            path: `/catalog/${query.param}`
        },
        {
            title: titlePage.title,
            path: `/catalog/${query.param}/${query.type}`
        },
    ]



    dispatch(setBreadCrubs(breadCrumbsArr));


    dispatch(setPageLinks(res.catGoods));
    dispatch(setGoods(res.goods));
    dispatch(setPaginator(res));



    return {
        props: {
            res,
            pageType,
            resolvedUrl,
            selectOption: option,
            query: query.type,
            initialReduxState: reduxStore.getState(),
            numberPage,
            titlePage: titlePage.title
        }
    }
}
