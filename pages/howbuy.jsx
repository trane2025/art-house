import Container from "../components/UI/Container"
import styled from 'styled-components';
import Layout from "../components/Layout/Layout";


function about() {
    return (
        <Layout title='О нашем салоне'>
            <Container>
                <Title>Как купить</Title>
            </Container>
        </Layout>
    )
}

export default about


const Title = styled.h1`
    margin-top: 20px;
    color: #562F2F;

`;