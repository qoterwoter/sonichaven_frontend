import React, {useEffect, useState} from "react";
import {Link, NavLink  } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {unAuthorize} from "../features/reducers/userSlice";

const Header = () => {
    const isAuth = useSelector(state => state.user.token)
    const dispatch = useDispatch()
    const [loginLogoutButton, setButton] = useState()

    const handleLogout = () => {
        dispatch(unAuthorize())
        setButton(loginButton)
    }

    const loginButton = <a className='nav__link' onClick={handleLogout}>Выйти</a>
    const logoutButton = <NavLink className='nav__link' to='auth'>Войти</NavLink >

    useEffect(() => {
        console.log(isAuth)
        if(isAuth) {
            setButton(loginButton)
        } else {
            setButton(logoutButton)
        }
    }, [isAuth])

    return (
        <header className='header'>
            <div className="container">
                <Link className='header__logo' to='/'>SonicHaven</Link>
                <nav className='header__nav nav'>
                    <NavLink className='nav__link' to='/'>Главная</NavLink>
                    <NavLink className='nav__link' to='/about-us'>О нас</NavLink>
                    {loginLogoutButton}
                </nav>
            </div>
        </header>
    )
}

export default Header