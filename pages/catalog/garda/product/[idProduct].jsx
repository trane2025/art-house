import React from 'react'
import { rootAPIdecor } from '../../../../API/api';
import CardCatalog from '../../../../components/Layout/CardCatalog';
import Layout from '../../../../components/Layout/Layout';
import Container from '../../../../components/UI/Container';

function IdProduct({ res }) {

    const pictures = res.images.split(";");
    const images = pictures.filter(item => item !== '');

    const imagesArr = images.filter(item => {

        const formatImage = item.split('.')[2];
        if (formatImage === 'jpg' || formatImage === 'jpeg' || formatImage === 'png') {
            return item
        }
    })

    const width = res.size.split('/')[0];
    const height = res.size.split('/')[1];
    const lenght = res.size.split('/')[2];
    const article = res.article;
    const title = res.title;
    const price = res.price;


    const param = [
        { label: 'Ширина (см)', value: width },
        { label: 'Высота (см)', value: height },
        { label: 'Длина (см)', value: lenght },
        { label: 'Материалы', value: res.material },
        { label: 'Бренд', value: res.brand },
        { label: 'Артикул', value: article },
    ];

    const paramFilter = param.filter(item => item.value !== '');

    return (

        <Layout>
            <Container>
                <CardCatalog
                    card={res}
                    article={article}
                    images={imagesArr}
                    title={title}
                    price={price}
                    id={res.id}
                    specifications={paramFilter} />
            </Container>

        </Layout>

    )
}

export async function getServerSideProps(context) {

    const res = await rootAPIdecor.getProduct(context.query.idProduct).then(response => {
        return response
    })

    return {
        props: {
            res
        }
    }
}

export default IdProduct