import Layout from '../../../components/Layout/Layout';
import Container from '../../../components/UI/Container';
import { rootAPIactions } from '../../../API/api';
import CatalogActions from '../../../components/pagesCatalog/CatalogActions/CatalogActions';
import { useEffect, useState } from 'react';




function actionsId({ res, query }) {

    const [goods, setGoods] = useState([]);
    const [countGoods, setCoutGoods] = useState(16);
    const [showBtn, setShowBtn] = useState(res.showBtnMore);
    const [prelouder, setPrelouder] = useState(false);

    useEffect(() => {
        setGoods(res.goods)

        return () => {
            setCoutGoods(16);
        }
    }, [res])

    const showMoreGoods = async () => {
        setPrelouder(true);
        setCoutGoods(countGoods + 16);
        rootAPIactions.getActions(query, countGoods).then(response => {
            const arr = [...goods, ...response.goods]
            setGoods(arr);
            setShowBtn(response.showBtnMore);
            setPrelouder(false);
        })
    }

    return (
        <Layout title='Акции'>
            <Container>
                <CatalogActions promo={res.promo} showBtn={showBtn} goods={goods} query={query} showMoreGoods={showMoreGoods} prelouder={prelouder} />
            </Container>
        </Layout >
    )
}

export default actionsId;

export async function getServerSideProps({ query }) {

    const res = await rootAPIactions.getActionsId(query.id);

    return {
        props: {
            res,
            query: query.id
        }
    }
}
