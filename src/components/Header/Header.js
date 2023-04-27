import React, {useEffect, useRef, useState} from "react";
import {Link, NavLink  } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {unAuthorize} from "../../features/reducers/userSlice";
import Avatar from "./Avatar";

const Header = () => {
    const isAuth = useSelector(state => state.user.token)
    const dispatch = useDispatch()
    const [buttons, setButtons] = useState()
    const [menuClass, setMenuClass] = useState('hide')
    const ref = useRef()

    const handleLogout = () => {
        dispatch(unAuthorize())
        setButtons(loginButtons)
    }

    const toggleMenu = () => {
        console.log(menuClass)
        if(menuClass==='hide') setMenuClass('show')
        else setMenuClass('hide')
    }

    const loginButtons = <Avatar handleLogout = {handleLogout} toggleMenu={toggleMenu}/>
    const logoutButton = <NavLink className='nav__link' to='auth'>Войти</NavLink >

    const handleClick = (event) => {
        if(ref.current && !ref.current.contains(event.target)) {
            setMenuClass('hide')
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick)
    }, [ref])

    useEffect(() => {
        console.log(isAuth)
        if(isAuth) {
            setButtons(loginButtons)
        } else {
            setButtons(logoutButton)
        }
    }, [isAuth])

    return (
        <header ref={ref}>
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
            <div className="header__bottomMenu">
                <div className={'menu menu_'+menuClass} onClick={toggleMenu}>
                    <NavLink className='menu__action nav__link' to='/shopCart' >Корзина</NavLink>
                    <a className='menu__action nav__link' onClick={handleLogout} href='#'>Выйти</a>
                </div>
            </div>
        </header>
    )
}

export default Header