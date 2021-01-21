import CardCatalog from '../../../../components/Layout/CardCatalog';
import Layout from '../../../../components/Layout/Layout';
import { rootAPI } from '../../../../API/api';
import Container from '../../../../components/UI/Container';




function card({ res }) {


    const article = res.article;
    let images = res.images.split(';').filter(item => item !== '');

    images.unshift(res.picture);

    const title = res.title;
    const description = res.description_detal;
    const price = res.price;

    const param = [
        { label: 'Ширина (см)', value: res.width_sm },
        { label: 'Высота (см)', value: res.height_sm },
        { label: 'Цвет каркаса', value: res.color_frame },
        { label: 'Страна производства', value: res.country_of_origin },
        { label: 'Материал каркаса', value: res.material_frame },
        { label: 'Материал сиденья', value: res.material_seat },
        { label: 'Объем (м3)', value: res.volume_m3 },
        { label: 'Форма', value: res.form },
        { label: 'Стиль', value: res.style },
        { label: 'Срок службы', value: res.life },
        { label: 'Гарантия', value: res.guarantee },
        { label: 'Высота сиденья (см)', value: res.height_seat },
        { label: 'Материал столешницы', value: res.material_countertop },
        { label: 'Длина (см)', value: res.length_sm },
        { label: 'Ширина стула (см)', value: res.width_chair_sm },
        { label: 'Высота стула (см)', value: res.height_chair },
        { label: 'Мягкое / жесткое сиденье', value: res.soft_hard_seat },
        { label: 'Цвет', value: res.color },
        { label: 'Цвет столешницы', value: res.color_countertop },
        { label: 'Столешница', value: res.countertop },
        { label: 'Длина max (см)', value: res.length_max_sm },
        { label: 'В какую комнату', value: res.wich_room },

    ]

    const paramFilter = param.filter(item => item.value !== '');

    return (
        <Layout title='Декор'>
            <Container>
                <CardCatalog
                    card={res}
                    article={article}
                    images={images}
                    title={title}
                    description={description}
                    price={price}
                    id={res.id}
                    specifications={paramFilter} />
            </Container>

        </Layout >
    )
}

export async function getServerSideProps(context) {


    const res = await rootAPI.getProductForId(context.query.card).then(response => {
        return response
    });

    return {
        props: {
            res
        }
    }
}

export default card;


