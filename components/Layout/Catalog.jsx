import styled from 'styled-components';
import FilterContainer from '../Filter/FilterContainer';
import Prelouder from '../UI/Prelouder';
import CatalogList from '../CatalogList/CatalogList'
import Link from 'next/link';
import CatalogNull from '../CatalogList/CatalogNull';
import Pagination from '../UI/Pagination';
import FilterWraper from '../UI/FilterWraper';
import BreadCrumbs from '../UI/BreadCrumbs';



function Catalog(props) {



    const changePage = () => {
        props.setPrelouder(true);
    }

    return (

        <StoreContainer>
            <FilterContainerAll>
                <FilterWraper title='Каталог'>
                    <CategoriesLinks>
                        {props.pageLinks.map((link, index) => {

                            return (
                                <LinkCategories active={link.url === props.activeUrl} key={index} className="container-categories">

                                    <Link href={`/${props.urlLink}/${link.url}`}>
                                        <a className="label-categories" onClick={changePage}>{link.title}</a>
                                    </Link>

                                </LinkCategories>
                            )
                        })}
                    </CategoriesLinks>
                </FilterWraper>
                <FilterContainer />
            </FilterContainerAll>

            <div className="content-container">
                <BreadCrumbs breadCrumbs={props.breadCrumbs} />
                <h2 className='title-page'>{props.title}</h2>
                {/* {props.typeGoodLinks
                    ? <TypeGoods>
                        {props.typeGoodLinks.map((link, index) => {

                            return (
                                <Link href={`/${props.url}/${link.url}`} key={index}>
                                    <a onClick={changePage}>
                                        <li>
                                            <span>{link.title}</span>
                                        </li>
                                    </a>
                                </Link>
                            )
                        })}
                    </TypeGoods>
                    : null} */}

                <div className="container-sort">
                    <h3 className='label-sort'>Сортировать по</h3>
                    <select onChange={event => props.onchangeOptions(event)} defaultValue='1' className='select-sort'>
                        <option value='1'>По умолчанию</option>
                        <option value='2'>По возрастанию цены</option>
                        <option value='3'>По убыванию цены</option>
                    </select>
                </div>

                {props.prelouder && <Prelouder />}
                <CardsListStyle prelouder={props.prelouder}>
                    {props.cardsGoods.goods
                        ? props.cardsGoods.goods.map(item => {
                            let typeLink = null;

                            if (props.typeGoodLinks) {
                                typeLink = props.typeGoodLinks.find(link => link.id_cat === item.cat);
                            }

                            return <CatalogList
                                key={item.id}
                                href={`/${props.url}${typeLink ? '/' + typeLink.url : ''}/${item.id}`}
                                item={item}
                                image={item.picture}
                                title={item.title}
                                article={item.id_tovar}
                                country={item.country_of_origin}
                                price={item.price}
                                productArr={item}
                                id={item.id}
                                imageLoading={props.imageLoading}
                            />
                        })
                        : <CatalogNull />}

                </CardsListStyle>
                <Pagination url={props.url} option={props.option} />

            </div>
        </StoreContainer>

    )
}

export default Catalog;


const FilterContainerAll = styled.div`

`;


const LinkCategories = styled.div`
    border-bottom: 1px solid #F7D3C6;

    .label-categories {
        font-weight: 800;
        font-size: 14px;
        line-height: 22px;
        color: #562F2F;
        flex: 1;
        padding: 10px 30px;
        user-select: none;
        display: block;
        background: ${props => props.active ? '#FBD2A4' : 'none'};
        transition: .3s;

        :hover {
            background-color: ${props => props.active ? '#FBD2A4' : 'white'};
        }
    }

   

    .title-links__container:last-child {
    border-bottom:none;
}


    .label-categories {
        
    }


    li {
        padding-bottom: 5px;
        :hover {
            background-color: white;
        }
    }

    .link__item {
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

const CategoriesLinks = styled.div`
    div:last-child {
        border: none;
    }
`;

const TypeGoods = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 30px -8px;
    cursor: pointer;
    li {
        width: 205px;
        height: 70px;
        top: 338.52px;
        background: #FFEFE9;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 8px;
        transition-duration: .3s;
            
            :hover{
                background: #FBD2A4;
            }
    }

    span {
        font-family: Open Sans;
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        color: #562F2F;
        width: 160px;
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
        margin-bottom: 15px;
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