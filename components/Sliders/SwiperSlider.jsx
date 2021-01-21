import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import Link from 'next/link';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const SwiperSlider = ({ slides }) => {


    return (
        <Container>
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
            <ButtonWraper>
                <ArrowPrev
                >
                    <svg width="36" height="7" viewBox="0 0 36 7" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.264405 3.93997C0.304402 4.1116 0.344395 4.2489 0.504383 4.31756L3.86408 6.68609C4.10405 6.89205 4.50402 6.8234 4.704 6.54878C4.90398 6.27417 4.82399 5.89658 4.54401 5.69062L2.78417 4.42054L35.1012 4.42054C35.4212 4.45487 35.7012 4.18025 35.7012 3.80266C35.7012 3.42507 35.4212 3.15046 35.1012 3.15046L2.78417 3.15045L4.54401 1.88037C4.82399 1.67441 4.90398 1.29682 4.704 1.02221C4.58401 0.850575 4.38403 0.747594 4.22404 0.747594C4.10405 0.747594 3.98406 0.781921 3.86408 0.850575L0.504383 3.21911C0.384392 3.32209 0.304402 3.45939 0.264405 3.5967C0.264405 3.63103 0.264405 3.69968 0.264405 3.73401C0.264405 3.83699 0.224407 3.90564 0.264405 3.93997Z" />
                    </svg>
                </ArrowPrev>

                <ArrowNext
                >
                    <svg width="36" height="7" viewBox="0 0 36 7" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.6838 3.34549C35.6438 3.17189 35.6038 3.03301 35.4439 2.96357L32.0842 0.567903C31.8442 0.359584 31.4442 0.429024 31.2442 0.706783C31.0443 0.984542 31.1243 1.36646 31.4042 1.57478L33.1641 2.85941H0.847016C0.527045 2.82469 0.24707 3.10245 0.24707 3.48437C0.24707 3.86629 0.527045 4.14405 0.847016 4.14405H33.1641L31.4042 5.42868C31.1243 5.637 31.0443 6.01892 31.2442 6.29668C31.3642 6.47028 31.5642 6.57444 31.7242 6.57444C31.8442 6.57444 31.9642 6.53972 32.0842 6.47028L35.4439 4.07461C35.5638 3.97045 35.6438 3.83157 35.6838 3.69269C35.6838 3.65797 35.6838 3.58853 35.6838 3.55381C35.6838 3.44965 35.7238 3.38021 35.6838 3.34549Z" />
                    </svg>
                </ArrowNext>
            </ButtonWraper>


        </Container>

    );
};

export default SwiperSlider;

const LinkSlide = styled.a`
    cursor: ${props => props.showPagePromo ? 'pointer' : 'default'};
    pointer-events: ${props => props.showPagePromo ? 'auto' : 'none'};
`;

const ButtonWraper = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
`;


const ArrowNext = styled.div`
    cursor: pointer;
    z-index: 2;
    display: block;
    background: #FDD5A6;
    width: 74px;
    height: 48px;
    bottom: 62px;
    left: 74px;
    bottom: -20px;
    top: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-duration: .3s;

    svg {
        fill:#95575A;
    }

    :hover {
        background: #5B1717;

        svg {
        fill:#ffffff;
    }
    }

    ::before {
        display: none;
    }
`;

const ArrowPrev = styled.div`
    cursor: pointer;
    z-index: 2;
    display: block;
    background: #FDD5A6;
    width: 74px;
    height: 48px;
    border-right: solid 1px #E9B79B;
    bottom: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0px;
    bottom: -20px;
    top: auto;
    transition-duration: .3s;

    svg {
        fill: #95575A;
    }

    :hover {
        background: #5B1717;

        svg {
        fill:#ffffff;
        }
    }

    ::before {
        display: none;
    }
`;

const Container = styled.div`
    user-select: none;
    position: relative;
    width: 785px;
    max-width: 785px;
    max-height: 524px
`;