import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import Container from '../components/UI/Container';

function contact() {
    return (
        <Layout title='Контакты'>
            <Container>
                <Section>
                    <h1>Контакты</h1>

                    <ContacttContainer>
                        <Discription>
                            <ImageContainer>
                                <img src="/images/Contacts/iamge-Arthouse.jpg" alt="Фото салона" />
                            </ImageContainer>
                            <ContainerDiscription>
                                <h2>Мы находимся</h2>
                                <ul>
                                    <li>
                                        <p><span>Адрес: </span>Пл. Декабристов, 7 </p>
                                    </li>
                                    <li>
                                        <p><span>Телефон: </span>+7 961 812 4245</p>
                                    </li>
                                    <li>
                                        <p><span>Режим работы: </span>С 9:00 до 20:00 </p>
                                    </li>
                                    <li>
                                        <div className='wraper-social'>
                                            <span>Социальные сети: </span>
                                            <a className='instagram' href='https://www.instagram.com/arthouse_30/' target={"_blank"} rel="noreferrer">
                                                <i>
                                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.4367 5.35425H6.57355C5.47823 5.35425 4.58691 6.21141 4.58691 7.26487V13.8653C4.58691 14.9189 5.47823 15.7761 6.57355 15.7761H13.4367C14.5321 15.7761 15.4235 14.9189 15.4235 13.8653V7.26487C15.4235 6.21146 14.5321 5.35425 13.4367 5.35425ZM10.005 13.9959C8.03812 13.9959 6.43772 12.4568 6.43772 10.565C6.43772 8.67339 8.03812 7.13423 10.005 7.13423C11.972 7.13423 13.5724 8.67339 13.5724 10.565C13.5724 12.4568 11.972 13.9959 10.005 13.9959ZM13.6872 7.84367C13.2216 7.84367 12.8429 7.47951 12.8429 7.03193C12.8429 6.58429 13.2216 6.22013 13.6872 6.22013C14.1526 6.22013 14.5313 6.58429 14.5313 7.03193C14.5313 7.47957 14.1526 7.84367 13.6872 7.84367Z" fill="#A21418" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.0049 8.58423C8.86946 8.58423 7.94482 9.47306 7.94482 10.5651C7.94482 11.6575 8.86946 12.5465 10.0049 12.5465C11.1408 12.5465 12.0648 11.6575 12.0648 10.5651C12.0648 9.47306 11.1408 8.58423 10.0049 8.58423Z" fill="#A21418" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M0 0.943115V20.1873H20.0099V0.943115H0ZM16.9305 13.8654C16.9305 15.7186 15.3634 17.2258 13.4365 17.2258H6.5734C4.64668 17.2258 3.07932 15.7186 3.07932 13.8654V7.26498C3.07932 5.41199 4.64668 3.9046 6.5734 3.9046H13.4365C15.3634 3.9046 16.9305 5.41199 16.9305 7.26498V13.8654Z" fill="#A21418" />
                                                    </svg>
                                                </i>
                                            </a>

                                            <a href='https://www.facebook.com/arthouse30/' target={"_blank"} rel="noreferrer">
                                                <i>
                                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.569336 0.515381V19.7596H11.2258V12.3259H8.62078V9.29132H11.2258V6.74279C11.2258 4.88931 12.7881 3.38678 14.7153 3.38678H17.4387V6.11559H15.49C14.8776 6.11559 14.3812 6.59305 14.3812 7.18199V9.29136H17.3897L16.9739 12.326H14.3812V19.7596H20.5792V0.515381H0.569336Z" fill="#A21418" />
                                                    </svg>
                                                </i>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </ContainerDiscription>

                        </Discription>

                        <MapWraper>
                            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A192598d498854512bc9e6be4c78ec4f793fde70b6b027defac6d21a6b41f01ea&amp;source=constructor" width="740" height="430" frameBorder="0"></iframe>
                        </MapWraper>
                    </ContacttContainer>
                </Section>
            </Container>
        </Layout>
    )
}

export default contact;

const MapWraper = styled.div`
    border: 3px solid #FFEFE9;
    width: 100%;
    height: 477px;
    margin-left: 10px;
    padding: 20px;
`;

const Section = styled.div`
    margin-top: 40px;
    
`;

const ContacttContainer = styled.div`
    margin-top: 35px;
    display: flex;
`;

const Discription = styled.div`
    width: 370px;
    min-width: 370px;
    background: #FFEFE9;
    padding: 70px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;

const ContainerDiscription = styled.div`
    margin-top: 15px;
    width: 100%;

    h2 {
        font-size: 18px;
    }



    p {
        font-size: 14px;
        font-weight: 600;
    }

    li {
        margin-top: 12px;
    }

    span {
        color: #575353;
        margin-right: 5px;
        font-size: 14px;
        font-weight: 600;
    }

    i {
            margin-left: 5px;
        }

    .wraper-social {
        display: flex;
        align-items: center;
    }
`;

const ImageContainer = styled.div`
    width: 230px;
    height: 160px;
    background: #461717;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
        max-height: 160px;
        transition: .4s;
        :hover {
            transform: scale(1.2)
        }
    }
`;