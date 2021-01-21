import React from 'react'
import { rootAPIsoftfurniture } from '../../../../API/api';
import CardCatalog from '../../../../components/Layout/CardCatalog';
import Layout from '../../../../components/Layout/Layout';
import Container from '../../../../components/UI/Container';


function paramProduct({ res }) {
    const param = res.params.split(';');
    const article = res.article;
    const images = res.images.split(';').filter(item => item !== '');
    const price = res.price;
    const title = res.title;


    return (

        <Layout>
            <Container>
                <CardCatalog
                    card={res}
                    article={article}
                    images={images}
                    title={title}
                    price={price}
                    param={param}
                    id={res.id} />
            </Container>

        </Layout>

    )
}

export async function getServerSideProps(ctx) {

    const res = await rootAPIsoftfurniture.getProduct(ctx.query.paramProduct).then(response => {
        return response
    })

    return {
        props: { res }
    }
}

export default paramProduct

