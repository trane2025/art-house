import React from 'react';
import styled from 'styled-components';
import CatalogList from '../../CatalogList/CatalogList';
import CatalogNull from '../../CatalogList/CatalogNull';
import Prelouder from '../../UI/Prelouder';

function CatalogActions({ promo, goods, showBtn, showMoreGoods, prelouder }) {

    return (
        <ContainerAction>
            <Promo>
                <div className="wraper-promo">
                    <h1>{promo.title}</h1>
                    <p>{promo.text}</p>
                </div>
                <div className="wraper-image">
                    <img src={promo.image} alt="Акция" />
                </div>
            </Promo>
            {prelouder && <Prelouder prelouder={prelouder} />}
            <CardsListStyle prelouder={prelouder}>
                {goods ? goods.map((item, index) => {
                    const image = item.picture.split(';');
                    const imagesArr = image.filter(item => {
                        const formatImage = item.split('.')[2];
                        if (formatImage === 'jpg' || formatImage === 'jpeg' || formatImage === 'png') {
                            return item
                        }
                    })
                    return <CatalogList
                        key={`${item.id}-${item.title}-${index}`}
                        href={`/catalog/${item.shop}/product/${item.id}`}
                        image={imagesArr[0]}
                        title={item.title}
                        country={item.country_of_origin}
                        price={item.price}
                        prelouder={prelouder}
                        productArr={item}
                        id={item.id}
                        sale={!!+item.sale}
                        oldPrice={item.old_price}
                    />
                })
                    : <CatalogNull />}
                {!prelouder && showBtn != 0 && <button onClick={showMoreGoods} className='button-more' >Показать еще</button>}
            </CardsListStyle>

        </ContainerAction>
    )
}

export default CatalogActions;

const ContainerAction = styled.section`
    .button-more {
        display: block;
        padding: 15px;
        border: 1px solid #EED6CD;
        border-top: none;
        background: #FFEFE9;
        width: 1167px;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        color: #562F2F;
        transition-duration: .3s;

        :hover {
            background: #FBD2A4;
        }

        :active {
            background: #FFEFE9;
        }
    }
`;

const CardsListStyle = styled.ul`
    display: flex;
    margin-top: 30px;
    flex-wrap: wrap;
    min-height: 300px;
    transition: .3s;
    opacity: ${props => props.prelouder ? '.3' : '1'};
`;

const Promo = styled.section`
    margin-top: 60px;
    display: flex;
    justify-content: space-between;

    .wraper-promo {    
        h1 {
            font-size: 36px;
            margin-bottom: 30px;
            line-height: 130%;
        }

        p {
            width: 500px;
            color: #6B5151;
            font-size: 16px;
            line-height: 170%;
        }
    }

    .wraper-image {
        max-height: 350px;
        width: auto;

        img {
            max-height: 350px;
            width: auto;
        }
    }


`;
