import styled from 'styled-components';
import Link from 'next/link';
import FilterWraper from '../../UI/FilterWraper';
import CatalogList from '../../CatalogList/CatalogList';
import Prelouder from '../../UI/Prelouder';
import CatalogNull from '../../CatalogList/CatalogNull';
import Select from '../../UI/Select';



function CatalogDecor(props) {
    return (

        <StoreContainer marginBottom={props.typeGoodLinks === undefined}>
            <FilterWraper title='Каталог'>
                <CategoriesLinks>
                    {props.filter.result.map((link, index) => {
                        const category = (props.filter.entities.category[link]);
                        return (
                            <LinkCategories active={category.active} open={category.open} key={index} className="container-categories">
                                <div className="title-links__container">
                                    <Link href={'/catalog/garda/[paramLight]'} as={`/catalog/garda/${category.url}`}
                                        passHref={true} scroll={false}>
                                        <a className="label-categories">{category.title}</a>
                                    </Link>

                                    {category.categoryItems.length !== 0 &&
                                        <i className='icon-arrow' onClick={() => { props.toggleCategory(link, 'category', !category.open) }}>
                                            <svg width="15" height="9" viewBox="0 0 15 9" fill="none" >
                                                <path d="M13.3137 7.47241L7.65687 1.84521L2.00001 7.47241" stroke="#562F2F" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </i>}
                                </div>
                                <ul className='categories__list'>
                                    {category.categoryItems.map((linkItem, index) => {
                                        const categoryItem = (props.filter.entities.categoryItems[linkItem]);
                                        return (
                                            <CategoryItems active={categoryItem.active} open={categoryItem.open} childs={categoryItem.childs.length} key={index + ' ' + categoryItem.title}>

                                                <div className="categoiesItemLink__container">
                                                    {categoryItem.childs.length !== 0 &&
                                                        <i className='icon-linkItem' onClick={() => { props.toggleCategory(linkItem, 'categoryItems', !categoryItem.open) }}>
                                                            <svg width="12" height="6" viewBox="0 0 15 9" fill="none" >
                                                                <path d="M13.3137 7.47241L7.65687 1.84521L2.00001 7.47241" stroke="#562F2F" strokeWidth="2" strokeLinecap="round" />
                                                            </svg>
                                                        </i>}
                                                    <Link href={`/catalog/garda/[paramLight]`} as={`/catalog/garda/${categoryItem.url}`} scroll={false}>
                                                        <a className='link__item' >
                                                            {categoryItem.title}
                                                        </a>
                                                    </Link>
                                                </div>
                                                <ul className="chids-container">
                                                    {categoryItem.childs.map((child, index) => {
                                                        const childsItem = (props.filter.entities.childsItems[child]);
                                                        return (
                                                            <Link key={child.title + '-' + index} href={`/catalog/garda/[paramLight]`} as={`/catalog/garda/${childsItem.url}`} scroll={false}>
                                                                <LinkChild active={childsItem.active} >
                                                                    {childsItem.title}
                                                                </LinkChild>
                                                            </Link>
                                                        )
                                                    })}
                                                </ul>
                                            </CategoryItems>
                                        )
                                    })}
                                </ul>
                            </LinkCategories>
                        )
                    })}
                </CategoriesLinks>
            </FilterWraper>
            <div className="content-container">
                <h2 className='title-page'>{props.title}</h2>

                <Select
                    onChange={event => props.onchangeOptions(event)}
                    value={props.option} />

                {props.prelouder && <Prelouder />}
                <CardsListStyle prelouder={props.prelouder}>
                    {props.cards.goods
                        ? props.cards.goods.map(item => {
                            const image = item.picture.split(';');
                            const imagesArr = image.filter(item => {
                                const formatImage = item.split('.')[2];
                                if (formatImage === 'jpg' || formatImage === 'jpeg' || formatImage === 'png') {
                                    return item
                                }
                            })
                            return <CatalogList
                                key={item.id}
                                href={`/catalog/garda/product/${item.id}`}
                                image={imagesArr[0]}
                                title={item.title}
                                country={item.country_of_origin}
                                price={item.price}
                                article={item.articule}
                                productArr={item}
                                id={item.id}
                                sale={!!+item.sale}
                                oldPrice={item.old_price}
                                imageLoading={props.imageLoading}
                            />
                        }) : <CatalogNull />}
                </CardsListStyle>
                {!props.prelouder && props.cards.showBtn != 0 && <button onClick={props.getGoodsMore} className='button-more' >Показать еще</button>}

            </div>
        </StoreContainer>

    )
}

export default CatalogDecor;

const LinkChild = styled.a`
    
        font-size: 12px;
        color: #562F2F;
        font-weight: 400;
        padding: 3px 30px;
        padding-left: 50px;
        line-height: 22px;
        display: flex;
        align-items: center;
        background-color: ${props => props.active ? '#FBD2A4' : 'none'};
        cursor: pointer;

        :hover {
            background-color: #FBD2A4;
        }

        ::before {
            content: '';
            display: block;
            min-width:5px;
            height: 5px;
            border-radius: 50%;
            background: #562F2F;
            margin-right: 10px;
            margin-left: 3px;
        }
    
`;

const CategoryItems = styled.li`
    transition-duration: .1s;
    user-select: none;
    background-color: ${props => props.active ? 'white' : 'none'};

    

    .chids-container {
        transition-duration: .3s;
        max-height: ${props => props.open ? '2000px' : '0'};
        overflow: hidden;
    }

    

    .categoiesItemLink__container {
        display: flex;
        align-items: center;
        padding: 3px 30px;
        :hover {
        background-color: ${props => props.active ? 'white' : '#FBD2A4'};
        }
    }

    .link__item {
        font-size: 12px;
        color: #562F2F;
        font-weight: 400;
        line-height: 22px;
        display: flex;
        align-items: center;

        ::before {
            content: '';
            display: ${props => props.childs ? 'none' : 'block'};
            min-width:5px;
            height: 5px;
            border-radius: 50%;
            background: #562F2F;
            margin-right: 10px;
            margin-left: 3px;
        }
    }

    .icon-linkItem {
        margin-right: 10px;
        transition-duration: .2s;
        transform: ${props => props.open ? 'rotate(180deg)' : 'rotate(0)'};
        cursor: pointer; 
    }
`;

const LinkCategories = styled.div`
    border-bottom: 1px solid #F7D3C6;
    transition-duration: .5s;
    background: ${props => props.active ? '#FDE1D6' : 'none'};

    .title-links__container {
        padding: 10px 30px;
        display: flex;
        align-items: center;
        user-select: none;

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
        max-height: ${props => props.open ? '2000px' : '0'};
        transition: max-height .3s;
        overflow: hidden;

        li:last-child {
            padding-bottom: 5px;
        }
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
`;