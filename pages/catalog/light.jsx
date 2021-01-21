import Layout from '../../components/Layout/Layout';
import Container from '../../components/UI/Container';
import CatalogLight from '../../components/pagesCatalog/CalalogLight/CatalogLight';
import { connect } from 'react-redux';
import { categoryToggle, setCategoriesLink } from '../../store/redusersLight/filterLight';
import { useState, useEffect } from 'react';
import { rootAPIsvet } from '../../API/api';
import { setCardsLight, setCardsLightMore } from '../../store/redusersLight/cardsLight';
import { normalizeLight } from '../../normalaze/normalazeLight';
import { initializeStore } from '../../store/store';
import { useUpdateEffect } from '../../useHooks';
import Axios from 'axios';






function light({ filterLight, cardsLight, setCardsLight, setCardsLightMore, categoryToggle, newObj }) {

    console.log(newObj);

    const title = 'Свет';

    const [option, setOption] = useState(1);
    const [showNumber, setShowNumber] = useState(16);
    const [prelouder, setPrelouder] = useState(false);
    const [imageLoading, setImageLoding] = useState(false);

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
        setShowNumber(16);
        setOption(event.target.value);
    }


    useUpdateEffect(() => {
        setPrelouder(true);
        setImageLoding(true);
        rootAPIsvet.getLight('', option).then(response => {
            setCardsLight(response.goods, response.showBtnMore);
            setPrelouder(false)
        })

    }, [option])

    const showMore = () => {
        setImageLoding(true);
        setPrelouder(true)
        setShowNumber(pre => pre + 16);

        rootAPIsvet.getLightMore(showNumber, option).then(response => {
            setCardsLightMore(response.goods, response.showBtnMore);
            setPrelouder(false)
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
                    getGoodsMore={showMore}
                    onchangeOptions={onchangeOptions}
                    toggleCategory={toggleCategory}
                    prelouder={prelouder}
                    imageLoading={imageLoading}
                    option={option}
                    pagination={newObj} />

            </Container>
        </Layout >
    )
}

const mapStateToProps = (state) => ({
    filterLight: state.filterLight,
    cardsLight: state.cardsLight
})

export default connect(mapStateToProps, { setCardsLight, setCardsLightMore, categoryToggle })(light)



export async function getServerSideProps(ctx) {

    const { query } = ctx;
    const { resolvedUrl } = ctx;

    console.log(ctx);

    let numberPage = 1;
    if (query.count) {
        numberPage = query.count;
    }

    const res = await rootAPIsvet.getLight();
    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;



    const newObj = await Axios.get(`https://server.arthouse-decor.ru/server_lights/app_with_pagination.php?page=lights&nmb_page=${numberPage}`).then(response => {
        return response.data
    });

    const linkNormalize = await normalizeLight(res.catGoods);

    dispatch(setCategoriesLink(linkNormalize))
    dispatch(setCardsLight(newObj.goods, res.showBtnMore))

    return {
        props: {
            newObj,
            res,
            linkNormalize,
            initialReduxState: reduxStore.getState()
        }
    }
}



