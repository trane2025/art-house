import styled from 'styled-components';
import Link from 'next/link';
import FilterWraper from '../../UI/FilterWraper';
import { useState } from 'react';
import CatalogList from '../../CatalogList/CatalogList';
import Prelouder from '../../UI/Prelouder';
import CatalogNull from '../../CatalogList/CatalogNull';
import Select from '../../UI/Select';
import Pagination from '../../UI/Pagination';
import { connect } from 'react-redux';



function CatalogLight(props) {

    const changePage = () => {
        props.setPrelouder(true);
    }

    return (

        <StoreContainer marginBottom={props.typeGoodLinks === undefined}>
            <FilterWraper title='Каталог'>
                <CategoriesLinks>
                    {props.filterLight.result && props.filterLight.result.map((link, index) => {

                        const category = props.filterLight.entities.category[link];

                        return (
                            <LinkCategories active={category.active} open={category.open} key={index} className="container-categories">
                                <div className="title-links__container" >
                                    <Link href={'/catalog/light/[paramLight]'} as={`/catalog/light/${category.url}`}
                                        passHref={true}>
                                        <a className="label-categories" onClick={changePage}>{category.title}</a>
                                    </Link>

                                    <i className='icon-arrow' onClick={() => { props.toggleCategory(category.id, !category.open) }}>
                                        <svg width="15" height="9" viewBox="0 0 15 9" fill="none" >
                                            <path d="M13.3137 7.47241L7.65687 1.84521L2.00001 7.47241" stroke="#562F2F" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </i>
                                </div>
                                <ul className='categories__list'>
                                    {category.categoryItems.map((linkItem, index) => {

                                        const categoryItems = props.filterLight.entities.categoryItems[linkItem];
                                        return (
                                            <CategoryesItem active={categoryItems.active} key={index} >
                                                <Link href={`/catalog/light/[paramLight]`} as={`/catalog/light/${categoryItems.url}`} >
                                                    <a onClick={changePage}>{categoryItems.title}</a>
                                                </Link>
                                            </CategoryesItem>
                                        )
                                    })}
                                </ul>
                            </LinkCategories>
                        )
                    })}
                </CategoriesLinks>
            </FilterWraper>
            <div className="content-container">
                <h1 className='title-page'>{props.title}</h1>
                <Select
                    onChange={event => props.onchangeOptions(event)}
                    value={props.option} />

                {props.prelouder && <Prelouder />}
                <CardsListStyle prelouder={props.prelouder}>
                    {props.cardsLight.goods ? props.cardsLight.goods.map((item, index) => {
                        return <CatalogList
                            key={`${item.id}-${item.title}-${index}`}
                            href={`/catalog/light/product/${item.id}`}
                            image={item.picture}
                            title={item.title}
                            country={item.country_of_origin}
                            price={item.price}
                            productArr={item}
                            prelouder={props.prelouder}
                            id={item.id}
                            sale={!!+item.sale}
                            oldPrice={item.old_price}
                            imageLoading={props.imageLoading}
                        />
                    })
                        : <CatalogNull />}
                </CardsListStyle>
                {<Pagination pagination={props.pagination} url={props.url} option={props.option} />}

            </div>
        </StoreContainer>

    )
}

export default CatalogLight;


const CategoryesItem = styled.li`
    background-color: ${props => props.active ? '#FBD2A4' : 'none'};
    padding-bottom: 5px;
    :hover {
        background-color: ${props => props.active ? '#FBD2A4' : 'white'};
    }

    a {
        font-size: 14px;
        color: #562F2F;
        font-weight: 400;
        padding: 5px 30px;
        display: flex;
        align-items: center;

        ::before {
            content: '';
            display: block;
            min-width:5px;
            height: 5px;
            border-radius: 50%;
            background: #562F2F;
            margin-right: 10px;
        }
    }
    
`;

const LinkCategories = styled.div`
    border-bottom: 1px solid #F7D3C6;

    .title-links__container {
        padding: 10px 30px;
        display: flex;
        align-items: center;
        user-select: none;
        background: ${props => props.active ? '#FDE1D6' : 'none'};

        :hover {
            background-color: white;
        }
    }

    .title-links__container:last-child {
    border-bottom:none;
}

    .icon-arrow {
        padding: 3px;
        cursor: pointer;
        transition-duration: .3s;
        transform: ${props => props.open ? 'rotate(180deg)' : 'rotate(0)'};
    }

    .label-categories {
        font-weight: 800;
        font-size: 14px;
        line-height: 22px;
        color: #562F2F;
        flex: 1;
    }

    .categories__list {
        max-height: ${props => props.open ? '700px' : '0'};
        transition: max-height .3s;
        overflow: hidden;
        background: ${props => props.active ? '#FDE1D6' : 'none'};
    }


    

    
`;


const CategoriesLinks = styled.div`
    div:last-child {
        border: none;
    }
`;



const CardsListStyle = styled.ul`
    width: 100%;
    display: flex;
    margin-top: 30px;
    flex-wrap: wrap;
    min-height: 300px;
    transition: .3s;
    opacity: ${props => props.prelouder ? '.3' : '1'};
`;

const StoreContainer = styled.div`
    display: flex;

    .button-more {
        padding: 15px;
        border: 1px solid #EED6CD;
        border-top: none;
        background: #FFEFE9;
        width: 100%;
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

    .content-container {
        margin-left: 30px;
        width: 100%;
    }

    .title-page {
        font-size: 36px;
        text-transform: uppercase;
        font-family: 'PT Serif';
        letter-spacing: 0.1em;
        color: #562F2F;
        margin-top: 15px;
        margin-bottom: ${props => props.marginBottom && '30px'};
    }

    .container-sort {
        display: flex;
        align-items: center;
    }

    .label-sort {
       color: #867A74;
       margin-right: 10px;
       font-size: 14px;
       font-weight: 400; 
    }

    .select-sort {
        padding: 10px 20px;
        border: 1px solid #EED6CD;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        color: #562F2F;
        cursor: pointer;
    }
`;