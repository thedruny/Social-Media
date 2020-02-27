import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header className={s.header}>
        <img src="https://www.logaster.ru/static/v3/img/products/logo.png" />>
        <div className={s.loginBlock}>
            {props.isAuth ? props.email
                : <NavLink to='/login'>Login</NavLink>}
        </div>
        <span className={s.loginBlock}>
            {props.isAuth && props.login}
        </span>
    </header>
}

export default Header;