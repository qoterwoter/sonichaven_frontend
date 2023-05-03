import React, {useEffect, useRef, useState} from "react";
import {Link, NavLink  } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {unAuthorize} from "../../reducers/userSlice";
import Avatar from "./Avatar";

const Header = () => {
    const isAuth = useSelector(state => state.user.token)
    const dispatch = useDispatch()
    const [buttons, setButtons] = useState()
    const [isShow, setIsShow] = useState(false)
    const ref = useRef()

    const hideMenu = () => {
        setIsShow(false)
    }

    const handleLogout = () => {
        dispatch(unAuthorize())
        setButtons(loginButtons)
        hideMenu()
    }

    const handleClick = (event) => {
        if(ref.current && !ref.current.contains(event.target)) {
            setIsShow(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [ref.current])

    useEffect(() => {
        if(isAuth) {
            setButtons(loginButtons)
        } else {
            setButtons(logoutButton)
        }
    }, [isAuth])

    const loginButtons = <Avatar handleLogout={handleLogout} isShow={isShow} setIsShow={setIsShow}/>
    const logoutButton = <NavLink className='nav__link' to='auth'>Войти</NavLink >



    return (
        <header>
            <div className='header'>
                <div className="container">
                    <Link className='header__logo' to='/'>SonicHaven</Link>
                    <nav className='header__nav nav'>
                        <NavLink className='nav__link' to='/'>Главная</NavLink>
                        <NavLink className='nav__link' to='/about-us'>О нас</NavLink>
                        <NavLink className='nav__link' to='/catalog'>Каталог</NavLink>
                    </nav>
                    {buttons}
                </div>
            </div>
            {isShow && <div className="header__bottomMenu">
                <div className={'menu'} ref={ref}>
                    <NavLink className='menu__action nav__link' to='/userProfile' onClick={hideMenu}>Мой профиль</NavLink>
                    <NavLink className='menu__action nav__link' to={'/releases'} onClick={hideMenu}>Мои релизы</NavLink>
                    <NavLink className='menu__action nav__link' to='/shopCart' onClick={hideMenu}>Корзина</NavLink>
                    <NavLink className='menu__action nav__link' to='/orders' onClick={hideMenu}>Заказы</NavLink>
                    <a className='menu__action nav__link' onClick={handleLogout} href='/'>Выйти</a>
                </div>
            </div>}
        </header>
    )
}

export default Header