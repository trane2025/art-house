import Container from "../components/UI/Container"
import styled from 'styled-components';
import Layout from "../components/Layout/Layout";
import Advanteges from "../components/Advatages/Advanteges";
import Brends from "../components/Brends/Brends";


function about() {
    return (
        <Layout title='О нашем салоне'>
            <Container>
                <SectionAbout>
                    <div>
                        <Title>О компании Art<span>&</span>House</Title>
                        <Paragraf>Наш интернет-магазин специализируется на продаже люстр и другого осветительного оборудования от ведущих производителей России, Европы и Китая</Paragraf>
                        <Paragraf>Мы следим за новинками и тенденциями на рынке освещения, поэтому у нас вы найдете решение для любой дизайнерской задумки и сможете воплотить ее в жизнь</Paragraf>
                        <Paragraf>Опытные специалисты всегда смогут проконсультировать вас по любым вопросам, связанным с техническими характеристиками или особенностями монтажа тех или иных светильников. А в разделе статьи вы сможете найти интересные материалы, которые помогут определиться с выбором нужного светильника</Paragraf>
                    </div>
                    <img src="/images/about/image-About.jpg" alt="Фото магазина" />
                </SectionAbout>

                <SectionAdvantages>
                    <SubTitle>Преимущества</SubTitle>
                    <Advanteges />
                </SectionAdvantages>
            </Container>

            <SectionGalary>
                <SubTitle>Наш магазин</SubTitle>
                <ul>
                    <li>
                        <img src="/images/about/image-1.png" alt="Фото галереии" />
                    </li>
                    <li>
                        <img src="/images/about/image-2.png" alt="Фото галереии" />
                    </li>
                    <li>
                        <img src="/images/about/image-3.png" alt="Фото галереии" />
                    </li>
                    <li>
                        <img src="/images/about/image-4.png" alt="Фото галереии" />
                    </li>
                </ul>
            </SectionGalary>

            <Container>
                <Brends />
            </Container>
        </Layout>
    )
}

export default about;





const SubTitle = styled.h2`
    text-align: center;
    font-size: 30px;
    margin-bottom: 30px;
`;

const Title = styled.h1`
    color: #562F2F;
    font-size: 30px;

    span {
        color: #E3BA89;
    }

`;


const SectionAdvantages = styled.section`
    margin-top: 80px;
    margin-bottom: 80px;
`;

const SectionGalary = styled.section`
    padding-top: 80px;
    padding-bottom: 80px;
    background: #FBEDE6;
    margin-bottom: 80px;
    

    ul {
        display: flex;
        justify-content: space-between;
        width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
    }
    
`;



const SectionAbout = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`;

const Paragraf = styled.p`
    width: 470px;
    line-height: 150%;
    margin: 20px 0;
    font-weight: 300;
`;


