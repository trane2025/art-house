import React, { useState } from 'react';
import styled from 'styled-components';
import PrelouderImage from '../UI/PrelouderImage';


function PopUpSlider({ imagesCards, setPopup, imageSlider }) {

    const hideBtn = imagesCards.length === 1;

    const [activeImage, setActiveImage] = useState(imageSlider);

    const nextImage = () => {
        if (activeImage === imagesCards.length - 1) {
            setActiveImage(0)
        }
        else setActiveImage(activeImage + 1);
    }

    const prevImage = () => {
        if (activeImage === 0) {
            setActiveImage(imagesCards.length - 1)
        }
        else setActiveImage(activeImage - 1);
    }

    const [prelouderImg, setPrelouderImg] = useState(true);



    return (
        <Container hideBtn={hideBtn}>

            {prelouderImg && <WraperPrelouderImage>
                <PrelouderImage />
            </WraperPrelouderImage>}

            <div className="image-wraper">

                {imagesCards.map((image, index) => {
                    return (
                        <Image active={activeImage === index} key={index} src={image} alt="Карточка товара" onLoad={() => setPrelouderImg(false)} />
                    )
                })}

                <div className="btn right-btn" onClick={nextImage}>
                    <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.82605 1.39111L7.34779 8.45633L0.82605 15.5215" strokeWidth="2" />
                    </svg>
                </div>
                <div className="btn left-btn" onClick={prevImage}>
                    <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.17392 15.6089L1.65218 8.54367L8.17392 1.47845" strokeWidth="2" />
                    </svg>
                </div>
                <div className="clouse-btn" onClick={() => { setPopup(false) }}>
                    <svg width="13" height="14" viewBox="0 0 13 14" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.22813" y1="1.94727" x2="11" y2="11.7191" strokeWidth="1.73684" strokeLinecap="round" />
                        <line x1="11" y1="2.01768" x2="1.22813" y2="11.7896" strokeWidth="1.73684" strokeLinecap="round" />
                    </svg>
                </div>
            </div>
            <div className="clouse" onClick={() => { setPopup(false) }}></div>
        </Container>
    )
}

export default PopUpSlider;


const WraperPrelouderImage = styled.div`
    position: absolute;
    width: 50vh;
    height: 50vh;
    z-index: 2;
`;

const Image = styled.img`
    display: ${props => props.active ? 'block' : 'none'};
    max-height: 80vh;
    animation-name: fade;
    animation-duration: .3s;
`;

const Container = styled.div`
    position: relative;
    user-select: none;
    z-index: 2000;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #100303e0;
    display: flex;
    justify-content: center;
    align-items: center;

    .clouse {
        position: fixed;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: -1; 
    }

    .btn {
        width: 50px;
        height: 50px;
        background-color: #FBD2A4;
        border-radius: 50%;
        display: ${props => props.hideBtn ? 'none' : 'flex'};
        justify-content: center;
        align-items: center;
        position: absolute;
        cursor: pointer;
        transition: .3s;
        display: none;
        animation-name: fade;
        animation-duration: .3s;
        
        svg {
            stroke: #5B1717;
        }
        
        :hover {
            background-color: #5B1717;
            
            svg {
                stroke: white;
            }

        }
    }

    .right-btn {
        right: 20px;
    }

    .left-btn {
        left: 20px;
    }

    .clouse-btn {
        top: -40px;
        right: -40px;
        width: 40px;
        height: 40px;
        background-color: #161616;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        cursor: pointer;
        border-radius: 50%;
        
        svg {
            stroke: white;
        }
    }

    .image-wraper {
        padding: 10px;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        :hover {
            .btn {
                display: ${props => props.hideBtn ? 'none' : 'flex'};
            }
        }
    }
`;
