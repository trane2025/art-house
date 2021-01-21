import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useUpdateEffect } from '../../useHooks';

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function Pagination({ pagination, url }) {

    const [activePage, setActivePage] = useState(+pagination.nmb_page);

    useEffect(() => {
        setActivePage(+pagination.nmb_page);
    }, [+pagination.nmb_page])



    const numberShowGoods = 16; //Колличество отображаемых товаров
    const numberAllGoods = +pagination.count_all_goods; //Колличество всех товаров
    const numberShowCount = 8;



    const countAllPages = Math.ceil(numberAllGoods / numberShowGoods); //Колличество всех номеров 30 000
    const [numberGroup, setNumberGroup] = useState(Math.ceil(activePage / numberShowCount)); //номер группы

    useEffect(() => {
        console.log(Math.ceil(activePage / numberShowCount));
        setNumberGroup(Math.ceil(activePage / numberShowCount));
    }, [activePage])


    const getPages = (countShow) => {
        let countVal = 0;
        let newArr = [];
        const numItaration = Math.ceil(countAllPages / countShow);

        for (let i = 0; i < numItaration; i++) {
            newArr.push([]);
            for (let j = 0; j < countShow; j++) {

                countVal++
                if (countVal <= countAllPages) {
                    newArr[i].push(countVal);
                }
                else break

            }
        }
        return newArr;
    }



    const onclickNext = () => {
        console.log(numberGroup);
        if (numberGroup < Math.ceil(countAllPages / numberShowCount)) {
            setNumberGroup(pre => pre + 1);
        }
        else setNumberGroup(1);

    }

    const onclickPrev = () => {
        console.log(Math.ceil(countAllPages / numberShowCount));
        if (numberGroup > 1) {
            setNumberGroup(pre => pre - 1);
        }
        else setNumberGroup(Math.ceil(countAllPages / numberShowCount));
    }




    return (
        <Container>
            <SlideButton onClick={onclickPrev}>
                <a>
                    <svg width="12" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.65674 0.751099L0.751009 3.65683L3.65674 6.56256" stroke="#562F2F" strokeLinecap="round" />
                    </svg>
                </a>
            </SlideButton>
            <WraperLinks>
                {getPages(numberShowCount)[numberGroup - 1].map((el, index) => {

                    return (
                        <Item key={index}>
                            <Link href={`/catalog/light?count=${el}`} >

                                <LinkPagination activePage={activePage === el} >{el}</LinkPagination>

                            </Link>

                        </Item>
                    )
                })}
                <Item>
                    ...
                </Item>
                <Item>
                    <Link href={`/catalog/light?count=${countAllPages}`}>
                        <LinkPagination>{numberWithSpaces(countAllPages)}</LinkPagination>
                    </Link>
                </Item>
            </WraperLinks>
            <SlideButton right onClick={onclickNext}>
                <a>
                    <svg width="12" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.65674 0.751099L0.751009 3.65683L3.65674 6.56256" stroke="#562F2F" strokeLinecap="round" />
                    </svg>
                </a>
            </SlideButton>
        </Container >
    )
}

export default Pagination;

const Container = styled.li`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SlideButton = styled.div`
    user-select: none;
    margin: 0 15px;
    a {
        width: 45px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: #FFFFFF;
        border: 1px solid #EED6CD;
        box-sizing: border-box;
        transform: ${props => props.right ? 'rotate(180deg)' : 'rotate(0)'};
        cursor: pointer;

        font-weight: 800;
        font-size: 12px;
        color: #5B1717;
        

        :hover {
            background: #FBD2A4;
            border: none;
        }

        svg {
            transform: translateX(2px);
        }
         
    }
`;

const WraperLinks = styled.ul`
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const Item = styled.li`
    margin: 0 2.5px;
`;

const LinkPagination = styled.a`
    cursor: pointer;
    user-select: none;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: ${props => props.activePage ? '#5B1717' : ' #FFFFFF'};
    color: ${props => props.activePage ? ' #FFFFFF' : '#5B1717'};
    border: ${props => props.activePage ? 'none' : ' 1px solid #EED6CD'};
    box-sizing: border-box;

    font-weight: 800;
    font-size: 12px;

    :hover {
        background: ${props => props.activePage ? ' #5B1717' : ' #FBD2A4'};
        border: none;
    }
`;