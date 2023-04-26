import React, {useEffect, useState} from "react";
import {Link, NavLink  } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {unAuthorize} from "../../features/reducers/userSlice";

const Header = () => {
    const isAuth = useSelector(state => state.user.token)
    const dispatch = useDispatch()
    const [buttons, setButtons] = useState()

    const handleLogout = () => {
        dispatch(unAuthorize())
        setButtons(loginButtons)
    }

    const loginButtons = <div className='nav__user-actions'>
        <NavLink className='nav__link' to='/shopCart' >Корзина</NavLink>
        <a className='nav__link' onClick={handleLogout} href='src/components/Header/Header#'>Выйти</a>
    </div>
    const logoutButton = <NavLink className='nav__link' to='auth'>Войти</NavLink >

    useEffect(() => {
        console.log(isAuth)
        if(isAuth) {
            setButtons(loginButtons)
        } else {
            setButtons(logoutButton)
        }
    }, [isAuth])

    return (
        <header className='header'>
            <div className="container">
                <Link className='header__logo' to='/'>SonicHaven</Link>
                <nav className='header__nav nav'>
                    <NavLink className='nav__link' to='/'>Главная</NavLink>
                    <NavLink className='nav__link' to='/about-us'>О нас</NavLink>
                    <NavLink className='nav__link' to='/catalog'>Каталог</NavLink>
                </nav>
                {buttons}
            </div>
        </header>
    )
}

export default Header