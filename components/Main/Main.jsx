import styled from 'styled-components';
import Container from '../UI/Container';
import Link from 'next/link'
import { useRouter } from 'next/router';


function Main() {

    const { route } = useRouter();



    const mainCategory = route.split('/')[2];

    const mainLinks = [
        { href: '/catalog/light', label: 'Свет', main: 'light' },
        { href: '/catalog/garda', label: 'Гарда-декор', main: 'garda' },
        { href: '/catalog/tables', label: 'Столы', main: 'tables' },
        { href: '/catalog/chairs', label: 'Стулья', main: 'chairs' },
        { href: '/catalog/bellus', label: 'Мягкая мебель', main: 'bellus' },
        { href: '/catalog/actions', label: 'Акции', main: 'actions' },
    ]


    return (
        <Container>
            <MainStyle>
                <ul>
                    {mainLinks.map((link, index) => {
                        return (
                            <LinkMain key={index}>
                                <Link href={link.href}>
                                    <a className={link.main === mainCategory ? 'main__link main-link__active' : 'main__link'}>
                                        {link.label}
                                    </a>
                                </Link>
                            </LinkMain>
                        )
                    })}
                </ul>
            </MainStyle>
        </Container>

    )
}

export default Main

const LinkMain = styled.li`

    display: inline-flex;

    .main__link {
        font-weight: 800;
        font-size: 16px;
        line-height: 22px;
        color: #562F2F;
        padding: 18px 56px;
        background: #FFEFE9;
        transition-duration: .2s;

        :hover {
            background: #FBD2A4;
        }

    }

    .main-link__active {
        background: #5B1717;
        color: white;

        :hover {
            background: #5B1717;
        }
    }
`;

const MainStyle = styled.nav`
    ul {
        margin: 15px 0;
        display: flex;
        justify-content: space-between;
    }

`;
