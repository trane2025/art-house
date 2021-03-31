import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import CatalogNull from '../CatalogList/CatalogNull';
import Pagination from '../UI/Pagination';
import Prelouder from '../UI/Prelouder';
import PrelouderImage from '../UI/PrelouderImage';

function Search({ goods, textResponse, prelouder, url, inputValue, imageLoading }) {

    const [prelouderImg, setPrelouderImg] = useState(imageLoading);



    return (
        <>
            <Container prelouder={prelouder}>
                {goods && <h1 className='title'>{`Вы искали: ${textResponse}`}</h1>}
                {prelouder && <Prelouder prelouder={prelouder} />}
                <ul>
                    {goods ? goods.map((item, index) => {
                        const image = item.picture.split(';');
                        return (
                            <li key={index}>

                                <Link href={`/catalog/${item.shop}/product/${item.id}`}>
                                    <a>
                                        <WraperImg>
                                            {prelouderImg && noneProduct !== 'Ошибка' && <PrelouderImage />}
                                            <img src={image[0]} alt="Фото товара" onLoad={() => setPrelouderImg(false)} />
                                        </WraperImg>
                                    </a>
                                </Link>

                                <div>
                                    <Link href={`/catalog/${item.shop}/product/${item.id}`}>
                                        <a>
                                            <h3>{item.title}</h3>
                                        </a>
                                    </Link>

                                    <p className='article'>{`Артикул ${item.article}`}</p>

                                    <h3 className='price'>{`${item.price} руб.`}</h3>
                                </div>

                            </li>
                        )
                    })
                        : <CatalogNull />}
                </ul>
            </Container>
            <Pagination url={url} value={inputValue} />
        </>
    )
}

export default Search;

const WraperImg = styled.div`

    width: 90px;
    height: 90px;
    background: #FFFFFF;
    border: 1px solid #EED6CD;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;

    img {
        max-height: 90px;
        width: auto;
    }
`;

const Container = styled.div`
    ul {
        transition: .3s;
        opacity: ${props => props.prelouder ? '.3' : '1'};
    }

    .title {
        margin-top: 30px;
        margin-bottom: 30px;
    }


    li {
        background: #FFEFE9;
        border: 1px solid #EED6CD;
        padding: 15px;
        margin-top: 15px;
        display: flex;
        align-items: center;
    }

    .price {
        font-weight: 800;
        margin-top: 6px;
    }

    h3 {
        color: #562F2F;
        font-weight: 600;

    }

    .article {
        margin-top: 6px;
        font-size: 14px;
        color: #6B5151;
    }

    button {
        margin-top: 15px;
        width: 100%;
        padding: 15px;
        background: #FFEFE9;
        border: 1px solid #EED6CD;
        display: inline-block;
        font-size: 16px;
        font-weight: 600;
        color: #562F2F;
        cursor: pointer;
        transition: .3s;

        :hover {
            background-color: #FBD2A4 ;
        }
    }
`;
