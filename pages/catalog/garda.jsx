import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/UI/Container';
import { rootAPIdecor } from '../../API/api';
import CatalogDecor from '../../components/pagesCatalog/CatalogDecor/CatalogDecor';
import { connect } from 'react-redux';
import { categoryToggleDecor, setCategoriesLinkDecor } from '../../store/redusersDecor/filterDecor';
import { useState, useEffect } from 'react';
import { setCardsDecor } from '../../store/redusersDecor/cardsDecor';
import Prelouder from '../../components/UI/Prelouder';
import { normalizeDecor } from '../../normalaze/normalazeDecor';
import { initializeStore } from '../../store/store';
import { setPrelouder } from '../../store/reducers/prelouder';
import { setPaginator } from '../../store/reducers/paginator';


function decor({ filterDecor, cardsDecor, categoryToggleDecor, setPrelouder, prelouder, selectOption, numberPage, resolvedUrl }) {

    const title = 'Гарда-декор';
    const url = 'catalog/garda';

    const [imageLoading, setImageLoding] = useState(false);
    const [option, setOption] = useState(selectOption);
    const router = useRouter();


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
            query: { option: event.target.value, count: 1 }
        })
    }

    const toggleCategory = (id, typeCategory, open) => {
        categoryToggleDecor(id, typeCategory, open)
    }

    return (
        <Layout title={title} resolvedUrl={resolvedUrl}>
            <Container>
                {filterDecor
                    ? <CatalogDecor
                        filter={filterDecor}
                        cards={cardsDecor}
                        title={title}
                        toggleCategory={toggleCategory}
                        onchangeOptions={onchangeOptions}
                        prelouder={prelouder}
                        imageLoading={imageLoading}
                        option={option}
                        url={url}
                        setPrelouder={setPrelouder} />
                    : <Prelouder />
                }

            </Container>
        </Layout >
    )
}

const mapStateToProps = (state) => ({
    filterDecor: state.filterDecor,
    cardsDecor: state.cardsDecor,
    prelouder: state.prelouder
})

export default connect(mapStateToProps, { categoryToggleDecor, setPrelouder })(decor);

export async function getServerSideProps({ query, resolvedUrl }) {

    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;

    let numberPage = 1;
    let option = 1;

    if (query.count) {
        numberPage = query.count;
    }

    if (query.option) {
        option = query.option;
    }


    const res = await rootAPIdecor.getDecor('', option, numberPage);




    dispatch(setCategoriesLinkDecor(normalizeDecor(res.catGoods)));
    dispatch(setCardsDecor(res.goods));
    dispatch(setPaginator(res));

    return {
        props: {
            numberPage,
            selectOption: option,
            resolvedUrl,
            initialReduxState: reduxStore.getState()
        }
    }
}

