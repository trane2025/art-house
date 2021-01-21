import styled from 'styled-components';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/UI/Container';
import Link from 'next/link';
import Axios from 'axios';
import { rootAPIactions } from '../../API/api';




function actions({ res }) {


    const { actions } = res;


    return (
        <Layout title='Акции'>
            <Container>
                <Title>Акции</Title>
                <WraperActions>
                    {actions.map((item, index) => {
                        const showPagePromo = !!+item.page_promo;
                        if (showPagePromo) {
                            return (
                                <Link href={'/catalog/actions/[actionsId]'} as={`/catalog/actions/${item.id}`} key={index}>
                                    <a>
                                        <li className="wraper-image" key={index}>
                                            <img src={item.image} alt="Акция" />
                                        </li>
                                    </a>
                                </Link>
                            )
                        }

                    })}
                </WraperActions>
            </Container>
        </Layout >
    )
}

export default actions;

export async function getServerSideProps() {

    const res = await rootAPIactions.getActions();

    return {
        props: {
            res
        }
    }
}


const WraperActions = styled.ul`
    margin-left: -15px;
    margin-right: -15px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;

    .wraper-image {
        max-height: 375px;
        width: auto;
        margin: 15px;

        img {
            max-height: 375px;
            width: auto;
        }
    }
`;


const Title = styled.h1`
    margin-top: 40px;
    color: #562F2F;
    font-size: 36px;
`;