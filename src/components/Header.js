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

    const loginButton = <NavLink className='nav__link' onClick={handleLogout}>Выйти</NavLink>
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
            <Link className='header__main-route' to='/'><h1>SonicHaven</h1></Link>

            <nav className='header__nav nav'>
                <NavLink className='nav__link' to='/'>Главная</NavLink>
                {loginLogoutButton}
            </nav>
        </header>
    )
}

export default Header