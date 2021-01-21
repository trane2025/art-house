import { useRouter } from 'next/router';
import { setToggleBasket } from '../../store/reducers/basket';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import { useState } from 'react';


function NavbarContaier(props) {

    const countGoods = props.basket.goods.length;

    const router = useRouter();
    const activeRoute = (router.route);

    const [inputSearch, setInputSearch] = useState('');

    const submitForm = async event => {
        event.preventDefault();
        if (inputSearch === '') {
            alert('Вы ничего не указали!')
        }
        else {
            router.push(`/search?value=${inputSearch}`);
        }
    }

    const onChangeInput = event => {
        setInputSearch(event.target.value)
    }

    const links = [
        { href: '/about', label: 'О компании' },
        { href: '/howbuy', label: 'Как купить' },
        { href: '/brends', label: 'Бренды' },
        { href: '/partners', label: 'Партнеры' },
        { href: '/service', label: 'Услуги' },
        { href: '/news', label: 'Новости' },
        { href: '/contacts', label: 'Контакты' },
    ]

    return (
        <Navbar {...props} links={links} activeRoute={activeRoute} submitForm={submitForm} countGoods={countGoods} inputSearch={inputSearch} onChangeInput={onChangeInput} />
    )
}

const mapStateToProps = (state) => ({
    basket: state.basket
})

export default connect(mapStateToProps, { setToggleBasket })(NavbarContaier);