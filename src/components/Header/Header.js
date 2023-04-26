import React, {useEffect, useState} from "react";
import {Link, NavLink  } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {unAuthorize} from "../../features/reducers/userSlice";
import Avatar from "./Avatar";

const Header = () => {
    const isAuth = useSelector(state => state.user.token)
    const dispatch = useDispatch()
    const [buttons, setButtons] = useState()

    const handleLogout = () => {
        dispatch(unAuthorize())
        setButtons(loginButtons)
    }

    const loginButtons = <Avatar handleLogout = {handleLogout}/>
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