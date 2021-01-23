import Layout from '../../components/Layout/Layout';
import Container from '../../components/UI/Container';
import CatalogLight from '../../components/pagesCatalog/CalalogLight/CatalogLight';
import { connect } from 'react-redux';
import { categoryToggle, setCategoriesLink } from '../../store/redusersLight/filterLight';
import { useState, useEffect } from 'react';
import { rootAPIsvet } from '../../API/api';
import { setCardsLight } from '../../store/redusersLight/cardsLight';
import { normalizeLight } from '../../normalaze/normalazeLight';
import { initializeStore } from '../../store/store';
import { useUpdateEffect } from '../../useHooks';
import { setPaginator } from '../../store/reducers/paginator';






function light({ filterLight, cardsLight, setCardsLight, categoryToggle, numberPage, res }) {


    const title = 'Свет';
    const url = 'catalog/light';

    const [option, setOption] = useState(1);

    const [prelouder, setPrelouder] = useState(false);
    const [imageLoading, setImageLoding] = useState(false);

    useEffect(() => {
        setOption(1);
        setPrelouder(true);
        setImageLoding(true);
        setTimeout(() => {
            setPrelouder(false);
        }, 500)
    }, [numberPage])


    const onchangeOptions = (event) => {
        setOption(event.target.value);
    }


    useUpdateEffect(() => {
        setPrelouder(true);
        setImageLoding(true);
        rootAPIsvet.getLight('', option, numberPage).then(response => {
            setCardsLight(response.goods, response.showBtnMore);
            setPrelouder(false)
        })

    }, [option])


    const toggleCategory = (category, open) => {
        categoryToggle(category, open)
    }

    return (
        <Layout title={title}>
            <Container>

                <CatalogLight
                    filterLight={filterLight}
                    title={title}
                    cardsLight={cardsLight}
                    onchangeOptions={onchangeOptions}
                    toggleCategory={toggleCategory}
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

export default connect(mapStateToProps, { setCardsLight, categoryToggle })(light)



export async function getServerSideProps(ctx) {

    const { query } = ctx;
    const { resolvedUrl } = ctx;

    let numberPage = 1;

    if (query.count) {
        numberPage = query.count;
    }


    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;

    const res = await rootAPIsvet.getLight('', '1', numberPage);

    const linkNormalize = await normalizeLight(res.catGoods);

    dispatch(setCategoriesLink(linkNormalize));
    dispatch(setCardsLight(res.goods));
    dispatch(setPaginator(res));

    return {
        props: {
            numberPage,
            res,
            linkNormalize,
            initialReduxState: reduxStore.getState()
        }
    }
}



