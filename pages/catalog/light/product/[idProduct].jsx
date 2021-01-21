import React from 'react'
import { rootAPIsvet } from '../../../../API/api';
import CardCatalog from '../../../../components/Layout/CardCatalog';
import Layout from '../../../../components/Layout/Layout';
import Container from '../../../../components/UI/Container';



function IdProduct({ res }) {

    const article = res.article;
    const images = res.image.split(';');

    const imagesArr = images.filter(item => {
        const formatImage = item.split('.')[2];
        if (formatImage === 'jpg' || formatImage === 'jpeg' || formatImage === 'png') {
            return item
        }
    })



    const title = res.title;
    const price = res.price;
    const param = res.param.split(';').map(item => {
        const splitItem = item.split('—');
        return {
            label: splitItem[1], value: splitItem[0]
        }
    });

    const paramFilter = param.filter(item =>
        item.value !== ''
        && item.value !== ' '
        && " Дата обновления изображений" !== item.label
        && " Автоматическая сортировка" !== item.label
        && " Раздел на сайте" !== item.label
        && " Остаток поставщика" !== item.label
        && " Срок окончания акции" !== item.label
        && " Новинка" !== item.label
        && " Акция" !== item.label
        && " Старая цена" !== item.label);

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

export async function getServerSideProps({ query }) {

    const res = await rootAPIsvet.getProduct(query.idProduct).then(response => {
        return response
    })

    return {
        props: {
            res
        }
    }
}

export default IdProduct