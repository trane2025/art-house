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
import { setPaginator } from '../../store/reducers/paginator';
import { setPrelouder } from '../../store/reducers/prelouder';
import { useRouter } from 'next/router';






function light({ filterLight, cardsLight, categoryToggle, numberPage, setPrelouder, prelouder, selectOption }) {

    const router = useRouter();

    const title = 'Свет';
    const url = 'catalog/light';

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
            query: { option: event.target.value, count: numberPage }
        })
    }


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

export default connect(mapStateToProps, { setCardsLight, categoryToggle, setPrelouder })(light)



export async function getServerSideProps(ctx) {

    const { query } = ctx;


    let numberPage = 1;
    let option = 1;

    if (query.count) {
        numberPage = query.count;
    }

    if (query.count) {
        option = query.option;
    }


    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;


    const res = await rootAPIsvet.getLight('', option, numberPage);

    const linkNormalize = normalizeLight(res.catGoods);

    dispatch(setCategoriesLink(linkNormalize));
    dispatch(setCardsLight(res.goods));
    dispatch(setPaginator(res));



    return {
        props: {
            numberPage,
            selectOption: option,
            initialReduxState: reduxStore.getState()
        }
    }
}



