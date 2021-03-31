import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PrelouderImage from '../UI/PrelouderImage';
import PopUpSlider from './PopUpSlider';

function SliderCard({ imagesCards, imageLoading }) {



    const [imageSlider, setImage] = useState(0);
    const [popup, setPopup] = useState(false);
    const [prelouderImg, setPrelouderImg] = useState(false);

    useEffect(() => {
        setPrelouderImg(imageLoading);
    }, [imageLoading])




    const ChangeImg = (value) => {
        setImage(value)
    }

    const dotsArr = imagesCards.filter((item, index) => index < 5);

    return (
        <>
            {popup && <PopUpSlider imagesCards={dotsArr} setPopup={setPopup} imageSlider={imageSlider} />}
            <SliderSection>

                <div className="image-wraper">

                    {imagesCards.map((item, index) => {
                        return (
                            <ImageCatalog
                                active={imageSlider === index} key={index}
                                onClick={() => { setPopup(true) }}
                                onLoad={() => setTimeout(() => { setPrelouderImg(false) }, 600)}>

                                {prelouderImg && <PrelouderImage />}

                                <i className="image-loup">
                                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="35" cy="35" r="35" fill="#FBD2A4" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M35.3209 36.1117C37.0982 33.4291 36.8051 29.7792 34.4415 27.4157C31.7434 24.7176 27.3688 24.7176 24.6707 27.4157C21.9725 30.1138 21.9725 34.4884 24.6707 37.1866C27.0342 39.5501 30.6841 39.8432 33.3667 38.0659L41.2811 45.9803L43.2353 44.0262L35.3209 36.1117ZM32.4874 29.3699C34.1062 30.9888 34.1062 33.6135 32.4874 35.2324C30.8685 36.8513 28.2437 36.8513 26.6248 35.2324C25.006 33.6135 25.006 30.9888 26.6248 29.3699C28.2437 27.751 30.8685 27.751 32.4874 29.3699Z" fill="#5B1717" />
                                        <path d="M41.8627 28.1372V25.3921H44.6078V28.1372H47.3529V30.8823H44.6078V33.6274H41.8627V30.8823H39.1177V28.1372H41.8627Z" fill="#5B1717" />
                                    </svg>
                                </i>
                                <img src={item} alt="Фото товара" />
                            </ImageCatalog>
                        )
                    })}

                </div>

                <ul className="dots-list">
                    {dotsArr.map((image, index) => {

                        return (

                            <DotsItem imageActive={imageSlider === index} key={index} onClick={() => { ChangeImg(index) }}>
                                {prelouderImg && <PrelouderImage />}
                                <img className='dots-image' src={image} alt="фото товара" onLoad={() => setTimeout(() => { setPrelouderImg(false) }, 600)} />
                            </DotsItem>
                        )
                    })}
                </ul>
            </SliderSection>
        </>
    )
}

export default SliderCard;



const ImageCatalog = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;


    :hover {
        .image-loup {
            opacity: 1;
        }
    }

    .image-loup {
        display: ${props => props.active ? 'inline' : 'none'};
        position: absolute;
        transition-duration: .3s;
        opacity: 0;
        cursor: pointer;
    }

    img {
        display: ${props => props.active ? 'inline' : 'none'};
        max-height: 35vh;
        width: auto;
        animation-name: fade;
        animation-duration: .5s;
        max-width: 700px;
    }
    
`;

const DotsItem = styled.li`
    position: relative;
    margin: 10px;
    width: 100px;
    min-width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: ${props => props.imageActive ? '2px solid #562F2F' : 'none'};
    overflow: hidden;
    cursor: pointer;

    :hover {
        outline: ${props => props.imageActive ? '2px solid #562F2F' : '2px solid #ccb19f'};
    }

    .dots-image {
        max-width: 90px;
        max-height: 90px;
        padding: 10px;
        transition: .3s;
    }
`;

const SliderSection = styled.div`
    width: 770px;
    min-width: 770px;
    border: 1px solid #EED6CD;
    padding-bottom: 30px;
    position: relative;
    
    .image-wraper {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px;
        padding-bottom: 20px;
        min-height: 390px;
        max-height: 390px;
    }

    .dots-list {
        display: flex;
        padding-left: 80px;
        padding-right: 80px;
    }

    
`;
