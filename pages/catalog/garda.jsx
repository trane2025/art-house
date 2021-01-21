import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/UI/Container';
import { rootAPIdecor } from '../../API/api';
import CatalogDecor from '../../components/pagesCatalog/CatalogDecor/CatalogDecor';
import { connect } from 'react-redux';
import { categoryToggleDecor, setCategoriesLinkDecor } from '../../store/redusersDecor/filterDecor';
import { useState, useEffect } from 'react';
import { setCardsDecor, setCardsDecorMore } from '../../store/redusersDecor/cardsDecor';
import Prelouder from '../../components/UI/Prelouder';
import { normalizeDecor } from '../../normalaze/normalazeDecor';
import { initializeStore } from '../../store/store';
import { useUpdateEffect } from '../../useHooks';


function decor({ filterDecor, setCardsDecor, cardsDecor, categoryToggleDecor, setCardsDecorMore }) {

    const title = 'Гарда-декор';

    const [imageLoading, setImageLoding] = useState(false);
    const [option, setOption] = useState(1);
    const [showNumber, setShowNumber] = useState(12);
    const [prelouder, setPrelouder] = useState(false);


    useEffect(() => {
        setOption(1);
        setPrelouder(true);
        setImageLoding(true);
        setTimeout(() => {
            setPrelouder(false);
        }, 500)
        return () => {
            setShowNumber(12);
        }
    }, [])

    const onchangeOptions = (event) => {
        setImageLoding(true);
        setShowNumber(12);
        setOption(event.target.value);
    }

    useUpdateEffect(() => {
        setPrelouder(true)
        rootAPIdecor.getDecor('', option).then(response => {
            setCardsDecor(response.goods, response.showBtnMore);
            setPrelouder(false)
        });
    }, [option])


    const showMore = () => {
        setImageLoding(true);
        setPrelouder(true)
        setShowNumber(pre => pre + 12);

        rootAPIdecor.getDecorMore(showNumber, '', option).then(response => {
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
                {filterDecor
                    ? <CatalogDecor
                        getGoodsMore={showMore}
                        filter={filterDecor}
                        cards={cardsDecor}
                        title={title}
                        toggleCategory={toggleCategory}
                        onchangeOptions={onchangeOptions}
                        prelouder={prelouder}
                        imageLoading={imageLoading} />
                    : <Prelouder />
                }

            </Container>
        </Layout >
    )
}

const mapStateToProps = (state) => ({
    filterDecor: state.filterDecor,
    cardsDecor: state.cardsDecor
})

export default connect(mapStateToProps, { setCategoriesLinkDecor, setCardsDecor, categoryToggleDecor, setCardsDecorMore })(decor);

export async function getServerSideProps() {
    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;


    const res = await rootAPIdecor.getDecor().then(response => {
        return response
    })

    dispatch(setCategoriesLinkDecor(normalizeDecor(res.catGoods)));
    dispatch(setCardsDecor(res.goods, res.showBtnMore));

    return {
        props: {
            initialReduxState: reduxStore.getState()
        }
    }
}

