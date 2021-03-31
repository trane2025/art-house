import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import Link from 'next/link';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const SwiperSlider = ({ slides }) => {


    return (
        <Container>
            <WraperImage>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={15}
                    navigation={{
                        nextEl: `${ArrowNext}`,
                        prevEl: `${ArrowPrev}`
                    }}
                    scrollbar={{ draggable: true }}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                    }}
                >

                    {slides.map((slide, index) => {
                        const showPagePromo = !!+slide.page_promo;
                        return (
                            <SwiperSlide key={index} >
                                <Link href={'/catalog/actions/[actionsId]'} as={`/catalog/actions/${slide.id}`}>
                                    <LinkSlide showPagePromo={showPagePromo}>
                                        <img src={slide.image} alt="Акция" />
                                    </LinkSlide>
                                </Link>
                            </SwiperSlide>

                        )
                    })}

                </Swiper>
                <ArrowPrev>
                    <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.17392 15.6089L1.65218 8.54367L8.17392 1.47845" strokeWidth="2" />
                    </svg>
                </ArrowPrev>

                <ArrowNext>
                    <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.82605 1.39111L7.34779 8.45633L0.82605 15.5215" strokeWidth="2" />
                    </svg>
                </ArrowNext>
            </WraperImage>





        </Container>

    );
};

export default SwiperSlider;






const ArrowNext = styled.div`
    position: absolute;
    cursor: pointer;
    z-index: 2;
    display: block;
    background: #FDD5A6;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    bottom: 62px;
    left: 95%;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, -50%);
    transition-duration: .3s;
    display: none;
    animation-name: fade;
    animation-duration: .3s;

    svg {
        stroke:#95575A;
    }

    :hover {
        background: #5B1717;

        svg {
            stroke:#ffffff;
    }
    }

    ::before {
        display: none;
    }
`;

const ArrowPrev = styled.div`
    position: absolute;
    cursor: pointer;
    z-index: 2;
    display: block;
    background: #FDD5A6;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border-right: solid 1px #E9B79B;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 5%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition-duration: .3s;
    display: none;
    animation-name: fade;
    animation-duration: .3s;

    svg {
        stroke: #95575A;
    }

    :hover {
        background: #5B1717;

        svg {
            stroke:#ffffff;
        }
    }

    ::before {
        display: none;
    }
`;

const Container = styled.div`
    user-select: none;
    width: 785px;
    max-width: 785px;
    max-height: 524px;
`;

const WraperImage = styled.div`
    position: relative;

    :hover {
        ${ArrowNext} {
            display: flex;
        }
        ${ArrowPrev} {
            display: flex;
        }
    }
`;


const LinkSlide = styled.a`
    cursor: ${props => props.showPagePromo ? 'pointer' : 'default'};
    pointer-events: ${props => props.showPagePromo ? 'auto' : 'none'};
`;