import Layout from '../../../components/Layout/Layout';
import Container from '../../../components/UI/Container';
import CatalogDecor from '../../../components/pagesCatalog/CatalogDecor/CatalogDecor';
import { connect } from 'react-redux';
import { categoryToggleDecor, setCategoriesLinkParamPage } from '../../../store/redusersDecor/filterDecor';
import { useEffect, useState, useRef } from 'react';
import { setCardsDecor, setCardsDecorMore } from '../../../store/redusersDecor/cardsDecor';
import Prelouder from '../../../components/UI/Prelouder';
import { rootAPIdecor } from '../../../API/api';
import { normalizeDecorParamPage } from '../../../normalaze/normalazeDecor';
import { initializeStore } from '../../../store/store';
import { useUpdateEffect } from '../../../useHooks';





function decorParam({ query, title, filterDecor, setCardsDecor, cardsDecor, categoryToggleDecor, setCardsDecorMore }) {


    const [imageLoading, setImageLoding] = useState(false);
    const [option, setOption] = useState(1);
    const [showNumber, setShowNumber] = useState(12);
    const [prelouder, setPrelouder] = useState(false);



    useEffect(() => {
        console.log('Сработал')
        setOption(1);
        setPrelouder(true);
        setImageLoding(true);
        setTimeout(() => {
            setPrelouder(false);
        }, 500)
        return () => {
            setShowNumber(12);
        }
    }, [query])


    const onchangeOptions = (event) => {
        setImageLoding(true);
        setShowNumber(12);
        setOption(event.target.value);
    }

    useUpdateEffect(() => {

        setPrelouder(true)
        rootAPIdecor.getDecor(query, option).then(response => {
            setCardsDecor(response.goods, response.showBtnMore);
            setPrelouder(false)
        })


    }, [option])



    const showMore = () => {
        setImageLoding(true);
        setPrelouder(true)
        setShowNumber(pre => pre + 12);

        rootAPIdecor.getDecorMore(showNumber, query, option).then(response => {
            setCardsDecorMore(response.goods, response.showBtnMore);
            setPrelouder(false)
        })
    }

    const toggleCategory = (id, typeCategory, open) => {
        categoryToggleDecor(id, typeCategory, open)
    }

    return (
        <Layout title={title}>
            <Container>
                <CatalogDecor
                    getGoodsMore={showMore}
                    filter={filterDecor}
                    cards={cardsDecor}
                    title={title}
                    toggleCategory={toggleCategory}
                    onchangeOptions={onchangeOptions}
                    option={option}
                    prelouder={prelouder}
                    imageLoading={imageLoading} />
            </Container>
        </Layout >
    )
}

const mapStateToProps = (state) => ({
    filterDecor: state.filterDecor,
    cardsDecor: state.cardsDecor
})

export default connect(mapStateToProps, { setCardsDecor, categoryToggleDecor, setCardsDecorMore, setCategoriesLinkParamPage })(decorParam)

export async function getServerSideProps(context) {

    const query = context.query.paramDecor;
    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;

    const res = await rootAPIdecor.getDecor(query).then(response => {
        return response
    })

    const linkNormalize = normalizeDecorParamPage(res.catGoods, query);

    let title = linkNormalize.decorLink.entities.category[linkNormalize.activeCategoryId].title;

    if (linkNormalize.activeCategoryItemid && linkNormalize.activeCategoryItemChild === 0) {
        title = linkNormalize.decorLink.entities.categoryItems[linkNormalize.activeCategoryItemid].title;
    }
    else if (linkNormalize.activeCategoryItemChild) {
        title = linkNormalize.decorLink.entities.childsItems[linkNormalize.activeCategoryItemChild].title
    }

    dispatch(setCategoriesLinkParamPage(linkNormalize));
    dispatch(setCardsDecor(res.goods, res.showBtnMore));



    return {
        props: {
            res,
            query,
            linkNormalize,
            title,
            initialReduxState: reduxStore.getState()
        }
    }
}


