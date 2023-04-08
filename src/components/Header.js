import React from "react";
import {Link, NavLink  } from "react-router-dom";

const Header = () => {
    return (
        <header className='header'>
            <Link className='header__main-route' to='/'><h1>SonicHaven</h1></Link>

            <nav className='header__nav nav'>
                <NavLink className='nav__link' to='/'>Главная</NavLink>
                <NavLink className='nav__link' to='auth'>Войти</NavLink >
            </nav>
        </header>
    )
}

export default Header