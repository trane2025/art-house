import Layout from '../../components/Layout/Layout';
import Container from '../../components/UI/Container';
import { rootAPIsoftfurniture } from '../../API/api';
import CatalogSoftFurniture from '../../components/pagesCatalog/CatalogSoftFurniture/CatalogSoftFurniture';
import { connect } from 'react-redux';
import { setCardsSoftFurniture, setCardsSoftFurnitureMore } from '../../store/redusersSoftFurniture/cardsSoftFurniture';
import { setCategoriesLink } from '../../store/redusersSoftFurniture/filterSoftFurniture';
import { useEffect, useState } from 'react';

import { initializeStore } from '../../store/store'
import { setPaginator } from '../../store/reducers/paginator';
import { setPrelouder } from '../../store/reducers/prelouder';






function softfurniture({ catalog, filter, setPrelouder, prelouder, numberPage, resolvedUrl }) {

    const title = 'Мягкая мебель'
    const url = 'catalog/bellus';

    const [imageLoading, setImageLoding] = useState(false);



    useEffect(() => {
        setImageLoding(true);
        setPrelouder(true);
        setTimeout(() => {
            setPrelouder(false);
        }, 500)
    }, [numberPage])



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



export async function getServerSideProps({ query, resolvedUrl }) {

    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;

    let numberPage = 1;


    if (query.count) {
        numberPage = query.count;
    }

    const res = await rootAPIsoftfurniture.getGoods('', '', numberPage);


    dispatch(setCategoriesLink(res.catGoods));
    dispatch(setCardsSoftFurniture(res.goods));
    dispatch(setPaginator(res));

    return {
        props: {
            numberPage,
            resolvedUrl,
            initialReduxState: reduxStore.getState()
        }
    }
}
