import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { rootAPIsearch } from '../API/api';
import Layout from '../components/Layout/Layout';
import Search from '../components/Search/Search';
import Container from '../components/UI/Container';
import Prelouder from '../components/UI/Prelouder';
import { setPaginator } from '../store/reducers/paginator';
import { setPrelouder } from '../store/reducers/prelouder';

function search({ inputValue, prelouder, setPrelouder, setPaginator, page, resolvedUrl }) {

    const [goods, setGoods] = useState(null);
    const url = `search`;
    const [imageLoading, setImageLoading] = useState(false);


    useEffect(() => {
        setPrelouder(true)
        rootAPIsearch.getGoods(inputValue, page).then(response => {

            setGoods(response.goods);
            setPaginator(response);
            setPrelouder(false);
            setImageLoading(true);
        })

    }, [inputValue, page]);



    return (
        <Layout title='Оформление заказа' resolvedUrl={resolvedUrl}>
            <Container>

                {goods !== null ?
                    <Search
                        goods={goods}
                        textResponse={inputValue}
                        prelouder={prelouder}
                        url={url}
                        inputValue={inputValue}
                        imageLoading={imageLoading} />
                    : <Prelouder />}

            </Container>
        </Layout>

    )
}

const mapStateToProps = (state) => ({
    prelouder: state.prelouder
})

export default connect(mapStateToProps, { setPrelouder, setPaginator })(search);



export async function getServerSideProps({ query, resolvedUrl }) {

    let page = 1;
    if (query.count) {
        page = query.count;
    }

    return {
        props: {
            inputValue: query.value,
            page,
            resolvedUrl
        }
    }
}

