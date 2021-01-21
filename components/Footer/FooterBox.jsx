import styled from 'styled-components';
import { normalize, schema } from "normalizr";
import Link from 'next/link';
import { useRouter } from 'next/router';


function FooterBox() {

    const { route } = useRouter();

    const boxsData = [
        {
            id: 1,
            title: 'Продукция',
            lists: [
                { id: '/catalog/light', label: 'Свет', href: '/catalog/light' },
                { id: '/catalog/garda', label: 'Гарда-декор', href: '/catalog/garda' },
                { id: '/catalog/tables', label: 'Столы', href: '/catalog/tables' },
                { id: '/catalog/chairs', label: 'Стулья', href: '/catalog/chairs' },
                { id: '/catalog/bellus', label: 'Мягкая мебель', href: '/catalog/bellus' },
                { id: '/catalog/actions', label: 'Акции', href: '/catalog/actions' }
            ]
        },
        {
            id: 2,
            title: 'О магазине',
            lists: [
                { id: '/about', label: 'О компании', href: '/about', active: false },
                { id: '/brends', label: 'Бренды', href: '/brends', active: false },
                { id: '/partners', label: 'Партнеры', href: '/partners', active: false },
                { id: '/services', label: 'Услуги', href: '/services', active: false },
                { id: '/news', label: 'Новости', href: '/news', active: false },
                { id: '/contacts', label: 'Контакты', href: '/contacts', active: false }
            ]
        },
        {
            id: 3,
            title: 'Ваш заказ',
            lists: [
                { id: '/order', label: 'Оформление заказа', href: '/order', active: false },
                { id: '/payment_and_delivery', label: 'Оплата и доставка', href: '/payment_and_delivery', active: false },
                { id: '/how_buy', label: 'Как купить', href: '/how_buy', active: false },
            ]
        },
    ]

    const items = new schema.Entity('items');
    const list = new schema.Entity('list', { lists: [items] });
    const boxDataNormalize = normalize(boxsData, [list]);

    return (
        <>
            {boxDataNormalize.result.map((box, index) => {


                const listBox = boxDataNormalize.entities.list[box];

                return (
                    <FooterBoxStyle key={index}>
                        <h4 className="title">{listBox.title}</h4>
                        <ul className="list">
                            {listBox.lists.map((list, i) => {

                                const itemBox = boxDataNormalize.entities.items[list]
                                return (
                                    <LinkWraper active={route === list} key={`${itemBox.title} - ${i}`}>
                                        <Link href={itemBox.href}>
                                            <a>{itemBox.label}</a>
                                        </Link>
                                    </LinkWraper>
                                )
                            })}
                        </ul>
                    </FooterBoxStyle>
                )
            })}
        </>
    )
}

export default FooterBox;

const LinkWraper = styled.li`
        list-style: disc;
        margin: 8px 18px;
        font-size: 14px;
        line-height: 19px;
        color: ${props => props.active ? 'white' : '#b67b7b;'};

        

        a {
            color: ${props => props.active ? 'white' : '#b67b7b;'};
            font-weight: 300;

            :hover {
            color: white;
        }
        }
`;

const FooterBoxStyle = styled.div`

    .title {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #FBEDE6;
    margin-bottom: 15px;
    }


`;
