import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';
import { rootAPIactions, rootAPIdecor, rootAPIsvet } from '../API/api';
import Advanteges from '../components/Advatages/Advanteges';
import Brends from '../components/Brends/Brends';
import Layout from '../components/Layout/Layout';
import CatalogHomePage from '../components/pagesCatalog/CatalogHomePage/CatalogHomePage';
import SwiperSlider from '../components/Sliders/SwiperSlider';
import Button from '../components/UI/Button';
import Container from '../components/UI/Container';


export default function Index({ res, randomGoods }) {

    const { push } = useRouter();

    const goHomePage = () => {
        push('/about');
    }

    return (
        <Layout
            title='Магазин освещения и предметов интерьера «Art&House» в Астрахани. Огромный выбор люстр, бра, светильников'
            description="Люстры, бра, споты, а также мебель, предметы интерьера и декора в Астрахани и еще многое другое. Приходите в магазин «Art&House» в Астрахани и заказывайте на сайте">
            <Container>
                <ContainerBanner>
                    <SliderBanner>
                        <SwiperSlider slides={res.actions} />
                    </SliderBanner>
                    <div className="action-Image__container">
                        <div className="wraper-action-image">
                            <img src="/images/image-action-1.jpg" alt="Акция 1" />
                        </div>
                        <div className="wraper-action-image space-action">
                            <img src="/images/image-action-2.jpg" alt="Акция 2" />
                        </div>
                    </div>
                </ContainerBanner>
                <Advanteges />
            </Container>

            <NewArrival>
                <Container>
                    <h2>Новые поступления</h2>
                    <ul className="button-list">
                        <li className="button-item">
                            <Button disabled={true}>Рекомендуемые товары</Button>
                        </li>
                        <li className="button-item">
                            <Button >Гарда-декор</Button>
                        </li>
                        <li className="button-item">
                            <Button disabled={true}>Хиты продаж</Button>
                        </li>
                    </ul>
                    <GoodsHomePage>
                        {randomGoods.map(item => {

                            return (
                                <CatalogHomePage
                                    key={item.id + item.title}
                                    id={item.id}
                                    picture={item.picture}
                                    price={item.price}
                                    title={item.title}
                                    productArr={item}
                                    stokBalance={item.stock} />
                            )
                        })}

                    </GoodsHomePage>
                </Container>
            </NewArrival>

            <Container>
                <AboutUs>
                    <div className="about-text">
                        <h1>Магазин «Art&House» <br /> в Астрахани</h1>
                        <p>Люстры, бра, споты, а также мебель, предметы интерьера и декора в Астрахани и еще многое другое. Приходите в магазин «Art&House» в Астрахани и заказывайте на сайте</p>
                        <p>Наш интернет-магазин специализируется на продаже люстр и другого осветительного оборудования от ведущих производителей России, Европы и Китая</p>
                        <p>Мы следим за новинками и тенденциями на рынке освещения, поэтому у нас вы найдете решение для любой дизайнерской задумки и сможете воплотить ее в жизнь</p>
                        <p>Опытные специалисты всегда смогут проконсультировать вас по любым вопросам, связанным с техническими характеристиками или особенностями монтажа тех или иных светильников. А в разделе статьи вы сможете найти интересные материалы, которые помогут определиться с выбором нужного светильника</p>

                        <div className="container-button">
                            <Button onClick={goHomePage}>Подробнее</Button>
                        </div>
                    </div>

                    <div className="about-image">
                        <img src="/images/homePage/about.jpg" alt="о нас" />
                    </div>
                </AboutUs>
                <Brends />
            </Container>



        </Layout >

    )
}

export async function getServerSideProps() {

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    const option = 1;
    const numberPage = 1;

    const res = await rootAPIactions.getActions();
    const getGoods = await rootAPIdecor.getDecor('svet', option, numberPage);

    const getRandomGoods = () => {
        let containersGoods = [];
        let current = 0;

        for (let i = 0; i < 4; i++) {
            containersGoods.push([]);
            for (let j = 0; j < 4; j++) {
                containersGoods[i].push(getGoods.goods[current]);
                current++
            }
        }
        return containersGoods;
    }

    const goodsContainer = getRandomGoods();



    return {
        props: {
            res,
            getGoods,
            randomGoods: goodsContainer[randomInteger(0, 3)]
        }
    }
}


const AboutUs = styled.section`
    display: flex;
    justify-content: space-between;
    padding-top: 80px;
    padding-bottom: 80px;

    h1 {
        font-size: 30px;
        margin-bottom: 5px;
        line-height: 120%;
    }

    p {
        font-size: 16px;
        line-height: 22px;
        padding: 10px  0;
        font-weight: 300;
        width: 450px;
    }

    .container-button {
        margin-top: 20px;
    }

`;

const GoodsHomePage = styled.ul`
    display: flex;
    margin-left: -15px;
    margin-right: -15px;
`;

const NewArrival = styled.div`
    background: #FFEFE9;
    padding-top: 80px;
    padding-bottom: 80px;
    margin-top: 10px;

    h2 {
        font-size: 30px;
        text-align: center;
    }

    .button-list {
        display: flex;
        padding: 40px;
        display: flex;
        justify-content: center;
    }

    .button-item {
        padding: 0 8px;
    }

`;



const ContainerBanner = styled.div`
   display: flex;

   .action-Image__container {
       display: flex;
       flex-direction: column;
   }

   .wraper-action-image {
       height: 250px;
   }

   .space-action {
       margin-top: 14px;
   }
   
`;

const SliderBanner = styled.div`
   margin-right: 20px;
   min-width: 0;
`;