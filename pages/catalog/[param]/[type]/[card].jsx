import CardCatalog from '../../../../components/Layout/CardCatalog';
import Layout from '../../../../components/Layout/Layout';
import { rootAPI } from '../../../../API/api';
import Container from '../../../../components/UI/Container';
import { useEffect, useState } from 'react';
import { setBreadCrubs } from '../../../../store/reducers/breadCrumbs';
import { connect } from 'react-redux';
import { initializeStore } from '../../../../store/store';




function card({ res, breadCrumbs }) {



    const [imageLoading, setImageLoading] = useState(false);
    const [imageSlide, setImageSlide] = useState([]);

    let article = [];
    let param = [];
    let images = [];
    if (res) {
        article = res.article;
        images = res.images.split(';').filter(item => item !== '');



        param = res.param.split(';').map(item => {
            const splitItem = item.split('—');
            return {
                label: splitItem[1], value: splitItem[0]
            }
        });
    }

    const paramFilter = param.filter(item => item.value !== ' ' && item.value !== '' && item.label !== " Картинки");

    useEffect(() => {
        setImageSlide(images);
        setImageLoading(true);
    }, [])

    const title = res.title;
    const description = res.description_detal;
    const price = res.price;




    return (
        <Layout title='Декор'>
            <Container>
                <CardCatalog
                    specifications={paramFilter}
                    card={res}
                    article={article}
                    images={imageSlide}
                    title={title}
                    description={description}
                    price={price}
                    id={res.id}
                    imageLoading={imageLoading}
                    breadCrumbs={breadCrumbs} />
            </Container>

        </Layout >
    )
}

const mapStateToProps = (state) => ({
    breadCrumbs: state.breadCrumbs
})

export default connect(mapStateToProps)(card);

export async function getServerSideProps({ query }) {

    let page = '';

    if (query.param === 'tables') {
        page = 'Столы'
    }
    else page = 'Стулья'

    const reduxStore = initializeStore();

    const { dispatch } = reduxStore;


    const imageLoading = true;
    const res = await rootAPI.getProductForId(query.card);



    let breadCrumbsArr = [
        {
            title: 'Главная',
            path: '/'
        },
        {
            title: page,
            path: `/catalog/${query.param}`
        },
        {
            title: query.type,
            path: `/catalog/${query.param}/${query.type}`
        },
        {
            title: res.title,
            path: `/catalog/${query.param}/${query.type}/${query.card}`
        },
    ]

    dispatch(setBreadCrubs(breadCrumbsArr));

    return {
        props: {
            res,
            imageLoading,
            initialReduxState: reduxStore.getState(),
        }
    }
}




