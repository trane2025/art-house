import styled from 'styled-components';
import Brends from '../components/Brends/Brends';
import Layout from '../components/Layout/Layout';
import Container from '../components/UI/Container';





function brends() {
    return (
        <Layout title='Декор'>
            <Container>
                <Section>
                    <Brends />
                </Section>
            </Container>
        </Layout >
    )
}

export default brends


const Section = styled.section`
    margin-top: 80px;
    color: #562F2F;

`;