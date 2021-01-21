import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setProductBasket } from '../../store/reducers/basket';
import SliderCard from '../Sliders/SliderCard';
import ButtonIcon from '../UI/ButtonIcon';
import { useRouter } from 'next/dist/client/router';

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function CardCatalog({ card, basket, setProductBasket, article, images, title, description, price, param, specifications }) {



    const router = useRouter();

    const BASKET_KEY = `basket-${card.title}-${card.id}`;

    useEffect(() => {

        const activeBtn = () => {
            const arr = JSON.parse(localStorage.getItem('basket'));
            let keys = Object.keys(arr);
            const findKey = keys.find(key => key === BASKET_KEY);
            return !!findKey;
        }

        setBtnSuccess(activeBtn())

    }, [basket])

    const [btnSuccess, setBtnSuccess] = useState(false);

    const getProduct = () => {

        let arr = JSON.parse(localStorage.getItem('basket'));
        arr[BASKET_KEY] = { ...card, productCount: 1 };

        localStorage.setItem('basket', JSON.stringify(arr));

        const arrAddCount = Object.keys(arr).map(key => {
            return arr[key];
        })

        setProductBasket(arrAddCount);
        setBtnSuccess(true);
    }

    const deleteProduct = () => {

        let arr = JSON.parse(localStorage.getItem('basket'));
        delete arr[BASKET_KEY];

        localStorage.setItem('basket', JSON.stringify(arr));

        const arrAddCount = Object.keys(arr).map(key => {
            return arr[key];
        })

        setProductBasket(arrAddCount);
        setBtnSuccess(false);
    }

    const [toggleActiveBtn, setToggleActiveBtn] = useState('description');


    return (
        <>
            <TitleCards>{title}</TitleCards>
            <Article>
                <p><span>{`Артикул: `}</span>{article}</p>
            </Article>
            <CardContainer>
                <SliderCard imagesCards={images} />

                <DescriptionCard>
                    <Price>
                        {!!+price && <h4><span>Цена: </span>{`${numberWithSpaces(price)} руб.`}</h4>}
                        <Buttons btnSuccess={btnSuccess} >
                            <button className='btn-add btn' onClick={() => { getProduct(card) }}>В корзину</button>
                            <button
                                className='btn-success btn'
                                onClick={() => { deleteProduct() }}>

                                <i className='icon-btn'>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.00012 7.3139L4.81387 10.1279L10.1279 4.8139" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </i>
                                В корзине
                            </button>
                        </Buttons>
                        <div className="back-btn__wraper">
                            <ButtonIcon onClick={() => { router.back() }}
                                icon={<svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.62927 2L1.99998 6.82218L6.62927 11.6444" stroke="#5B1717" strokeWidth="2" strokeLinecap="round" />
                                </svg>}>Назад</ButtonIcon>
                        </div>
                    </Price>
                    <DeliveryInfo>
                        <h4>Доставка</h4>
                        <p>Интернет-заказы обрабатываются ежедневно</p>
                        <p className='delivery-data'>ПН-ПТ 9:00 - 22:00 СБ-ВС 10:00 - 22:00</p>
                        <p>Заказы, оформленные в нерабочее время и выходные, обрабатываются на следующий рабочий день</p>
                    </DeliveryInfo>
                </DescriptionCard>
            </CardContainer>

            <ToggleBtn>
                <Btn active={'description' === toggleActiveBtn} onClick={() => setToggleActiveBtn('description')}>
                    <p>Описание</p>
                </Btn>
                <Btn active={'props' === toggleActiveBtn} onClick={() => setToggleActiveBtn('props')}>
                    <p>Характеристики</p>
                </Btn>
            </ToggleBtn>

            {description && 'description' === toggleActiveBtn && <Description dangerouslySetInnerHTML={{ __html: `${description}` }}></Description>}



            {specifications && 'props' === toggleActiveBtn && <Table>
                <tbody>
                    {specifications.map((item, key) => {
                        return (
                            <tr key={key}>
                                <td>{item.label}</td>
                                <Space />
                                <td>{item.value}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>}

            {param && <DiscriptionText>
                <h3>Описание:</h3>
                {param.map((item, index) => {
                    return (
                        <p key={index}>{item}</p>
                    )
                })}
            </DiscriptionText>}

        </>
    )


}

const mapStateToProps = (state) => ({
    basket: state.basket
})



export default connect(mapStateToProps, { setProductBasket })(CardCatalog);

const ToggleBtn = styled.ul`
    display: flex;
    margin-top: 30px;
    border-bottom: 1px solid #EED6CD;
    user-select: none;
    margin-bottom: 30px;
`;

const Btn = styled.li`
    background: ${props => props.active ? 'white' : '#FFEFE9'};
    border: 1px solid #EED6CD;
    border-bottom:${props => props.active ? ' white 1px solid' : ''};
    padding: 15px 30px;
    margin: 0 -1px -1px 0;
    cursor: pointer;

    p {
        font-weight: 800;
        font-size: 18px;
        line-height: 25px;
        color: #562F2F;
    }
`;

const Space = styled.td`
    border-bottom: dotted 2px #808080;
    margin-left: 10px;
    margin-right: 10px;
    flex-grow: 1;
    align-self: flex-start;
    margin-top: 20px;
    opacity: .3;
`;

const Table = styled.table`
    display: block;
    animation-name: fade;
    animation-duration: .5s;

    tbody {
        display: block;
        width: 770px;
    }

    tr {
        display: flex;
        margin-top: 15px;
    }

    td {
        font-size: 13px;
        color: #6B5151;
    }
`;

const DeliveryInfo = styled.div`
    h4 {
        margin-top: 20px;

    }

    p {
        font-size: 16px;
        line-height: 170%;
        width: 300px;
    }

    .delivery-data {
        width: 160px;
        font-weight: 800;
    }
`;


const Article = styled.div`
    
        margin-bottom: 30px;

    p {
        font-size: 14px;
        font-weight: 600;
        word-break: break-word;
    }

    span {
        color: #7C6C6C;
    }
`;


const DiscriptionText = styled.div`
    animation-name: fade;
    animation-duration: .5s;

    h3 {
        margin-top: 30px;
    }

    p {
        font-weight: 300;
        margin: 10px;
        margin-left: 0;
    }
`;

const CardContainer = styled.div`
    display: flex;
`;


const TitleCards = styled.h1`
    margin-top: 30px;
    margin-bottom: 15px;
    line-height: 120%;
    width: 870px;
`;

const Buttons = styled.div`
    display: flex;

    .btn {
        border-radius: 50px;
        border: none;
        padding: 15px 35px;
        color: white;
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
        transition-duration: .3s;
        background:  #5B1717;
        letter-spacing: 0.02em;
    }

    .btn-add {
        display: ${props => props.btnSuccess ? 'none' : 'block'};

        :hover {
            background:  #5f1717;
        }
    }

    .btn-success {
        color: white;
        background: #0B8F30;
        display: ${props => props.btnSuccess ? 'block' : 'none'};

        :hover {
            background:#057726;
        }

        .icon-btn {
            margin-right: 5px;
        }
    }
`;

const Price = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFEFE9;
    border: 1px solid #EED6CD;
    padding: 25px;
    align-items: center;
    justify-content: center;
    

    span {
        font-size: 18px;
        font-weight: 400;
    }

    h4 {
        color: #A74242;
        font-size: 24px;
        margin-bottom: 15px;
    }
`;

const DescriptionCard = styled.ul`
    width: 100%;
    max-width: 370px;
    

    margin-left: 30px;

    .back-btn__wraper {
        margin-top: 10px;
    }
`;


const Description = styled.div`
    animation-name: fade;
    animation-duration: .5s;
    width: 750px;
    h1 {
        margin-top: 30px;
        margin-bottom: 10px;
        font-size: 18px;
        line-height: 120%;
        text-transform: inherit;
        font-weight: 600;
    }

    p {
        margin-bottom: 10px;
        font-weight: 300;
    }
`;