import Head from 'next/head';
import React from 'react'
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import BasketContainer from '../Basket/BasketContainer';
import NavbarContainer from '../Navbar/NavbarContainer';
import YandexMetrica from '../YandexMetrica/YandexMetrica';


function Layout({ children, title = 'Art-House', description }) {
    return (
        <>
            <Head>
                <title>{`${title}`}</title>
                <meta name="description" content={description} />
                <meta charSet="utf-8" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
                <meta name='viewport' content='width=1200' />
            </Head>
            <YandexMetrica />
            <BasketContainer />
            <NavbarContainer />
            <Main />
            {children}
            <Footer />
        </>
    )
}

export default Layout
