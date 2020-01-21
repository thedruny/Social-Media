import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <img src="https://www.logaster.ru/static/v3/img/products/logo.png" alt="логотип"></img>
    </header>
}

export default Header;