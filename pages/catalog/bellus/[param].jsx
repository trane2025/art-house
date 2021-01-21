import Layout from '../../../components/Layout/Layout';
import Container from '../../../components/UI/Container';
import { rootAPIsoftfurniture } from '../../../API/api';
import CatalogSoftFurniture from '../../../components/pagesCatalog/CatalogSoftFurniture/CatalogSoftFurniture';
import { connect } from 'react-redux';
import { setCardsSoftFurniture, setCardsSoftFurnitureMore } from '../../../store/redusersSoftFurniture/cardsSoftFurniture';
import { setCategoriesLinkActive } from '../../../store/redusersSoftFurniture/filterSoftFurniture';
import { useState, useEffect } from 'react';

import { initializeStore } from '../../../store/store';




function softfurniture({ title, query, setCardsSoftFurnitureMore, catalog, filter }) {



    const [imageLoading, setImageLoding] = useState(false);
    const [showNumber, setShowNumber] = useState(16);
    const [prelouder, setPrelouder] = useState(false);

    useEffect(() => {
        setPrelouder(true);
        setImageLoding(true);
        setTimeout(() => {
            setPrelouder(false);
        }, 500)
        return () => {
            setShowNumber(12);
        }
    }, [query])

    const showMore = () => {
        setImageLoding(true)
        setPrelouder(true)
        setShowNumber(pre => pre + 16);

        rootAPIsoftfurniture.getMore(showNumber).then(response => {
            setCardsSoftFurnitureMore(response.goods, response.showBtnMore);
            setPrelouder(false)
        })
    }

    return (
        <Layout title={title}>
            <Container>
                <CatalogSoftFurniture
                    title={title}
                    filter={filter}
                    catalog={catalog}
                    prelouder={prelouder}
                    getGoodsMore={showMore}
                    imageLoading={imageLoading} />
            </Container>
        </Layout >
    )
}

const mapStateToProps = (state) => ({
    catalog: state.cardsSoftFurniture,
    filter: state.filterSoftFurniture
})

export default connect(mapStateToProps, { setCardsSoftFurniture, setCardsSoftFurnitureMore, setCategoriesLinkActive })(softfurniture)



export async function getServerSideProps(context) {

    const query = context.query.param;
    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;

    const res = await rootAPIsoftfurniture.getGoods(query).then(response => {
        return response
    })

    dispatch(setCategoriesLinkActive(res.catGoods, query));
    dispatch(setCardsSoftFurniture(res.goods, res.showBtnMore));



    const title = res.catGoods.find(item => item.url === query).title;

    return {
        props: {
            res,
            query,
            title,
            initialReduxState: reduxStore.getState()
        }
    }
}