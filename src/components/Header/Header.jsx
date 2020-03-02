import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header className={s.header}>
        <img src="https://www.logaster.ru/static/v3/img/products/logo.png" />>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.email} <button onClick={props.logout}>Logout</button></div>
                : <NavLink to='/login'>Login</NavLink>
            }
        </div>
    </header>
}

export default Header;