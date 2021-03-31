import Container from "../components/UI/Container"
import styled from 'styled-components';
import Layout from "../components/Layout/Layout";
import Button from "../components/UI/Button";
import { useRouter } from "next/router";


function about() {
    const { push } = useRouter();

    const redirectHome = () => {
        push('/');
    }

    return (
        <Layout title='О нашем салоне'>
            <Container>
                <WraperPage>
                    <Image src="/images/404/image.jpg" alt="Фонарь" />
                    <hr />
                    <TitleWraper>
                        <h1>Ошибка</h1>
                        <h3>Страница не найдена</h3>
                        <p>Неправильно набран адрес или такой страницы не существует</p>
                        <Button onClick={redirectHome}>Перейти на главную</Button>
                    </TitleWraper>
                </WraperPage>

            </Container>
        </Layout>
    )
}

export default about

const Image = styled.img`
    
    
`;

const WraperPage = styled.div`
    margin-top: 70px;
    display: flex;
    align-items: center;

    hr {
        content: '';
        display: block;
        height: 300px;
        width: 2px;
        color: #5B1717;
        margin: 0 60px;
    }
    
`;


const TitleWraper = styled.div`
    h1 {
        font-size: 72px;
        text-transform: none;
        letter-spacing: 0.01em;
        color: #EAB87F;
        padding: 20px 0;
    }
    
    h3 {
        font-weight: 400;
        font-size: 36px;
        padding: 20px 0;
    }

    p {
        font-size: 18px;
        width: 350px;
        color: #7D5C5C;
        line-height: 25px;
        padding-bottom: 20px;
    }
    
`;