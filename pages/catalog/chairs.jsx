import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { rootAPI } from '../../API/api';
import Catalog from '../../components/Layout/Catalog';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/UI/Container';
import { setGoods } from '../../store/reducers/cardsGoods';
import { setPageLinks, sortPage } from '../../store/reducers/pageLinks';
import { initializeStore } from '../../store/store';
import { setPrelouder } from '../../store/reducers/prelouder';
import { setPaginator } from '../../store/reducers/paginator';
import { setBreadCrubs } from '../../store/reducers/breadCrumbs';
import { setFilter } from '../../store/reducers/filter';
import { normalizeFilter } from '../../normalaze/normalazeFilter';




function chairs({ title, cardsGoods, prelouder, setPrelouder, numberPage, selectOption, page, resolvedUrl, pageLinks, breadCrumbs }) {


    const router = useRouter();

    const url = `catalog/${page}`;
    const { asPath } = useRouter();

    const [option, setOption] = useState(selectOption);
    const [imageLoading, setImageLoding] = useState(false);

    useEffect(() => {
        setImageLoding(true);
        setPrelouder(true);
        setTimeout(() => {
            setPrelouder(false);
        }, 500)
    }, [numberPage])

    const onchangeOptions = (event) => {
        setOption(event.target.value);
        setPrelouder(true);
        router.push({
            pathname: `/${url}`,
            query: { ...router.query, option: event.target.value, count: 1 }
        })
    }



    return (
        <Layout title={title} resolvedUrl={resolvedUrl}>
            <Container>
                <Catalog
                    typeGoodLinks={pageLinks}
                    title={title}
                    linkRoute={asPath}
                    cardsGoods={cardsGoods}
                    prelouder={prelouder}
                    onchangeOptions={onchangeOptions}
                    imageLoading={imageLoading}
                    option={option}
                    url={url}
                    setPrelouder={setPrelouder}
                    urlLink={url}
                    pageLinks={pageLinks}
                    breadCrumbs={breadCrumbs} />
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

export default connect(mapStateToProps, { setPrelouder })(chairs);

export async function getServerSideProps({ query, resolvedUrl }) {
    const title = 'Стулья';
    const page = 'chairs';


    let filterQuery = ''
    let numberPage = 1;
    let option = 1;

    if (query.filter) {
        filterQuery = query.filter
    }

    if (query.count) {
        numberPage = query.count;
    }

    if (query.option) {
        option = query.option;
    }

    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;

    const res = await rootAPI.getGoods(page, option, '', numberPage, filterQuery);

    const breadCrumbsArr = [
        {
            title: 'Главная',
            path: '/'
        },
        {
            title,
            path: `/catalog/${page}`
        },
    ]

    const filter = res.filter;

    dispatch(setFilter(normalizeFilter(filter)));

    dispatch(setBreadCrubs(breadCrumbsArr));

    dispatch(setPageLinks(res.catGoods))
    dispatch(setGoods(res.goods));
    dispatch(setPaginator(res));

    return {
        props: {
            res,
            page,
            query,
            title,
            numberPage,
            selectOption: option,
            resolvedUrl,
            initialReduxState: reduxStore.getState(),
            filter
        }
    }
}