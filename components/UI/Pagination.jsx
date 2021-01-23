import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useUpdateEffect } from '../../useHooks';
import { nextPage, prevPage, setPaginator } from '../../store/reducers/paginator';
import next from 'next';

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function Pagination({ url, paginator, nextPage }) {


    const onclickNext = () => {

        if (paginator.numberActiveGroup < paginator.countAllGroup - 1) {
            nextPage(paginator.numberActiveGroup + 1);

        }
        else nextPage(paginator.countAllGroup - 1);

    }

    const onclickPrev = () => {

        if (paginator.numberActiveGroup > 1) {
            nextPage(paginator.numberActiveGroup - 1);
        }
        else nextPage(0);
    }




    return (
        <Container>
            {paginator.countAllGroup > 1 && <SlideButton onClick={onclickPrev}>
                <a>
                    <svg width="12" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.65674 0.751099L0.751009 3.65683L3.65674 6.56256" stroke="#562F2F" strokeLinecap="round" />
                    </svg>
                </a>
            </SlideButton>}
            <WraperLinks>
                {!!paginator.arr.length && paginator.arr[paginator.numberActiveGroup].map((el, index) => {
                    return (
                        <Item key={index}>
                            <Link href={`/${url}?count=${el}`} >
                                <a>
                                    <LinkPagination activePage={paginator.activePage === el} >{el}</LinkPagination>
                                </a>
                            </Link>

                        </Item>
                    )
                })}
                {paginator.countAllGroup > 1 && paginator.numberActiveGroup + 1 !== paginator.countAllGroup && <>
                    <Item>
                        ...
                    </Item>
                    <Item>
                        <Link href={`/${url}?count=${paginator.countAllPages}`}>
                            <LinkPagination>{numberWithSpaces(paginator.countAllPages)}</LinkPagination>
                        </Link>
                    </Item>
                </>}
            </WraperLinks>
            {paginator.countAllGroup > 1 && <SlideButton right onClick={onclickNext}>
                <a>
                    <svg width="12" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.65674 0.751099L0.751009 3.65683L3.65674 6.56256" stroke="#562F2F" strokeLinecap="round" />
                    </svg>
                </a>
            </SlideButton>}
        </Container >
    )
}

const mapStateToProps = (state) => ({
    paginator: state.paginator
});

export default connect(mapStateToProps, { setPaginator, nextPage, prevPage })(Pagination);

const Container = styled.li`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-behavior: smooth;
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

const LinkPagination = styled.p`
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
    animation-name: fade;
    animation-duration: .5s;

    font-weight: 800;
    font-size: 12px;

    :hover {
        background: ${props => props.activePage ? ' #5B1717' : ' #FBD2A4'};
        border: none;
    }
`;