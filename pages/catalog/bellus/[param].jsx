import Layout from '../../../components/Layout/Layout';
import Container from '../../../components/UI/Container';
import { rootAPIsoftfurniture } from '../../../API/api';
import CatalogSoftFurniture from '../../../components/pagesCatalog/CatalogSoftFurniture/CatalogSoftFurniture';
import { connect } from 'react-redux';
import { setCardsSoftFurniture } from '../../../store/redusersSoftFurniture/cardsSoftFurniture';
import { setCategoriesLinkActive } from '../../../store/redusersSoftFurniture/filterSoftFurniture';
import { useState, useEffect } from 'react';

import { initializeStore } from '../../../store/store';
import { setPrelouder } from '../../../store/reducers/prelouder';
import { setPaginator } from '../../../store/reducers/paginator';




function softfurniture({ title, query, catalog, filter, prelouder, setPrelouder, numberPage, resolvedUrl }) {



    const [imageLoading, setImageLoding] = useState(false);
    const url = `catalog/bellus/${query}`;

    useEffect(() => {
        setImageLoding(true);
        setPrelouder(true);
        setPrelouder(false);
    }, [query, numberPage])

    return (
        <Layout title={title} resolvedUrl={resolvedUrl}>
            <Container>
                <CatalogSoftFurniture
                    title={title}
                    filter={filter}
                    catalog={catalog}
                    prelouder={prelouder}
                    imageLoading={imageLoading}
                    setPrelouder={setPrelouder}
                    option={1}
                    url={url}
                    setPrelouder={setPrelouder} />
            </Container>
        </Layout >
    )
}

const mapStateToProps = (state) => ({
    catalog: state.cardsSoftFurniture,
    filter: state.filterSoftFurniture,
    prelouder: state.prelouder
})

export default connect(mapStateToProps, { setPrelouder })(softfurniture)



export async function getServerSideProps(context) {
    const { resolvedUrl } = context;
    const query = context.query.param;
    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;


    let numberPage = 1;

    if (context.query.count) {
        numberPage = context.query.count;
    }

    const res = await rootAPIsoftfurniture.getGoods(query, '', numberPage);



    const title = res.catGoods.find(item => item.url === query).title;

    dispatch(setCategoriesLinkActive(res.catGoods, query));
    dispatch(setCardsSoftFurniture(res.goods));
    dispatch(setPaginator(res));

    return {
        props: {
            res,
            query,
            title,
            numberPage,
            resolvedUrl,
            initialReduxState: reduxStore.getState()
        }
    }
}