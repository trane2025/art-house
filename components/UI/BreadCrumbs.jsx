import styled from 'styled-components';
import Link from 'next/link';

function BreadCrumbs({ breadCrumbs }) {
    return (
        <WraperCrumbs>
            {breadCrumbs && breadCrumbs.map((item, index) => {
                return (
                    <ItemCrumbs key={`${item.title + index + 1}`}>
                        <Link href={item.path}>
                            <a>{item.title}</a>
                        </Link>
                        <i>
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.12109 7L6.94952 4.17157L4.12109 1.34315" stroke="#70635D" strokeLinecap="round" />
                            </svg>
                        </i>
                    </ItemCrumbs>
                )
            })}
        </WraperCrumbs>
    )
}

export default BreadCrumbs;


const WraperCrumbs = styled.ul`
    display: flex;
`;

const ItemCrumbs = styled.li`
    
    display: flex;
    align-items: center;
    

    a {
        color: #867A74;
        font-size: 14px;
        margin-right: 5px;
    }

    i {
        margin-right: 10px;  
    }
`;
