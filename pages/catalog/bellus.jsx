import Layout from '../../components/Layout/Layout';
import Container from '../../components/UI/Container';
import { rootAPIsoftfurniture } from '../../API/api';
import CatalogSoftFurniture from '../../components/pagesCatalog/CatalogSoftFurniture/CatalogSoftFurniture';
import { connect } from 'react-redux';
import { setCardsSoftFurniture, setCardsSoftFurnitureMore } from '../../store/redusersSoftFurniture/cardsSoftFurniture';
import { setCategoriesLink } from '../../store/redusersSoftFurniture/filterSoftFurniture';
import { useEffect, useState } from 'react';

import { initializeStore } from '../../store/store'






function softfurniture({ setCardsSoftFurnitureMore, catalog, filter }) {

    const title = 'Мягкая мебель'

    const [showNumber, setShowNumber] = useState(16);
    const [prelouder, setPrelouder] = useState(false);
    const [imageLoading, setImageLoding] = useState(false);



    useEffect(() => {
        setPrelouder(true);
        setImageLoding(true);
        setTimeout(() => {
            setPrelouder(false);
        }, 500)
        return () => {
            setShowNumber(12);
        }
    }, [])

    const showMore = () => {
        setImageLoding(true)
        setPrelouder(true)
        setShowNumber(pre => pre + 16);

        rootAPIsoftfurniture.getMore(showNumber).then(response => {
            console.log(response);
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

export default connect(mapStateToProps, { setCardsSoftFurniture, setCategoriesLink, setCardsSoftFurnitureMore })(softfurniture)



export async function getServerSideProps() {

    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;

    const res = await rootAPIsoftfurniture.getGoods();

    dispatch(setCategoriesLink(res.catGoods));
    dispatch(setCardsSoftFurniture(res.goods, res.showBtnMore));


    return {
        props: {
            initialReduxState: reduxStore.getState(),
            res
        }
    }
}
