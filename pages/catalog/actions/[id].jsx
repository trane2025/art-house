import Layout from '../../../components/Layout/Layout';
import Container from '../../../components/UI/Container';
import { rootAPIactions } from '../../../API/api';
import CatalogActions from '../../../components/pagesCatalog/CatalogActions/CatalogActions';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setPrelouder } from '../../../store/reducers/prelouder';
import { setPaginator } from '../../../store/reducers/paginator';




function actionsId({ res, query, setPrelouder, prelouder, goods, setPaginator, resolvedUrl }) {



    const url = `catalog/actions/${query}`;
    const [imageLoading, setImageLoding] = useState(false);

    useEffect(() => {
        setImageLoding(true);
        setPaginator(res);
        setPrelouder(false);

    }, [goods])

    return (
        <Layout title='Акции' resolvedUrl={resolvedUrl}>
            <Container>
                <CatalogActions
                    promo={res.promo}
                    goods={goods}
                    query={query}
                    prelouder={prelouder}
                    url={url}
                    imageLoading={imageLoading} />
            </Container>
        </Layout >
    )
}

const mapStateToProps = (state) => ({
    prelouder: state.prelouder
})

export default connect(mapStateToProps, { setPrelouder, setPaginator })(actionsId);

export async function getServerSideProps({ query, resolvedUrl }) {

    let page = 1;

    if (query.count) {
        page = query.count
    }

    const res = await rootAPIactions.getActionsId(query.id, page);

    const goods = res.goods;

    return {
        props: {
            res,
            query: query.id,
            resolvedUrl,
            goods
        }
    }
}
