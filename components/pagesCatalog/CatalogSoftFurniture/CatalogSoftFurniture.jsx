import styled from 'styled-components';
import Link from 'next/link';
import FilterWraper from '../../UI/FilterWraper';
import CatalogList from '../../CatalogList/CatalogList';
import Prelouder from '../../UI/Prelouder';
import CatalogNull from '../../CatalogList/CatalogNull';
import Pagination from '../../UI/Pagination';



function CatalogSoftFurniture(props) {

    const changePage = () => {
        props.setPrelouder(true);
    }

    return (

        <StoreContainer marginBottom={props.typeGoodLinks === undefined}>
            <FilterWraper title='Каталог'>
                <CategoriesLinks>
                    {props.filter.map((link, index) => {

                        return (
                            <LinkCategories active={link.active} key={index} className="container-categories">

                                <Link href={'/catalog/bellus/[param]'} as={`/catalog/bellus/${link.url}`}>
                                    <a className="label-categories" onClick={changePage}>{link.title}</a>
                                </Link>

                            </LinkCategories>
                        )
                    })}
                </CategoriesLinks>
            </FilterWraper>
            <div className="content-container">
                <h2 className='title-page'>{props.title}</h2>

                {props.prelouder && <Prelouder />}
                <CardsListStyle prelouder={props.prelouder}>
                    {props.catalog.goods ? props.catalog.goods.map(item => {

                        return <CatalogList
                            key={item.id}
                            href={`/catalog/bellus/product/${item.id}`}
                            image={item.picture}
                            title={item.title}
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

export default CatalogSoftFurniture;

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