import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';
import { useRouter } from 'next/router';

function PageContruction() {

    const { push } = useRouter();

    const redirectHomePage = () => {
        push('/');
    }

    return (
        <ContainerPage>
            <TitleWraper>
                <h1>Страница <br /> в разработке</h1>
                <p>Приносим свои извинения!</p>
                <Button onClick={redirectHomePage}>Перейти на главную</Button>
            </TitleWraper>
            <img src="/images/PageContruction/image.jpg" alt="Нет картинки" />
        </ContainerPage>
    )
}

export default PageContruction;

const ContainerPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

`;

const TitleWraper = styled.div`
    margin-right: 120px;

    h1 {
        font-size: 64px;
        text-transform: none;
        letter-spacing: 0.01em;
        color: #EAB87F;
        line-height: 100%;
    }


    p {
        font-size: 30px;
        color: #7D5C5C;
        line-height: 25px;
        padding: 35px 0;
    }
    
`;