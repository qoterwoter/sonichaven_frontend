import React, {useEffect, useRef, useState} from "react";
import {Link, NavLink  } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {unAuthorize} from "../../reducers/userSlice";
import Avatar from "./Avatar";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Header = () => {
    const isAuth = useSelector(state => state.user.token)
    const dispatch = useDispatch()
    const [buttons, setButtons] = useState()
    const [isShow, setIsShow] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
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
        if(ref && ref.current && !ref.current.contains(event.target)) {
            setIsShow(false)
            if(isMobile) {
                setShowMenu(false)
            }
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

    const handleMediaQuery = mediaQuery => {
        if (mediaQuery.matches) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 750px)")
        mediaQuery.addEventListener('change', handleMediaQuery);
        handleMediaQuery(mediaQuery);

        return () => {mediaQuery.removeListener(handleMediaQuery)}
    }, [])

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    const hideMobileMenu = () => {
        setShowMenu(false)
    }
    const loginButtons = <Avatar handleLogout={handleLogout} isShow={isShow} setIsShow={setIsShow}/>
    const logoutButton = <NavLink className='nav__link' to='auth'>Войти</NavLink>

    return (
        <header>
            <div className='header' ref={ref}>
                <div className="container">
                    <Link className='header__logo' to='/'>SonicHaven</Link>
                    {isMobile ? null :
                        <nav className='header__nav nav'>
                            <NavLink className='nav__link' to='/'>Главная</NavLink>
                            <NavLink className='nav__link' to='/about-us'>О нас</NavLink>
                            <NavLink className='nav__link' to='/catalog'>Каталог</NavLink>
                        </nav>
                    }
                    {isMobile ?
                        <MenuRoundedIcon className={'icon icon_edit'} onClick={toggleMenu}/> :
                    buttons}
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
            {showMenu && <div className={'header__mobileMenu'}>
                <div className="menu">
                    <h2 className="menu__title">Навигация</h2>
                    <NavLink className='nav__link' to='/' onClick={hideMobileMenu}>Главная</NavLink>
                    <NavLink className='nav__link' to='/about-us' onClick={hideMobileMenu}>О нас</NavLink>
                    <NavLink className='nav__link' to='/catalog' onClick={hideMobileMenu}>Каталог</NavLink>
                </div>
                <div className="menu">
                    <h2 className="menu__title">Моя информация</h2>
                    <NavLink className='menu__action nav__link' to='/userProfile' onClick={hideMobileMenu}>Мой профиль</NavLink>
                    <NavLink className='menu__action nav__link' to={'/releases'} onClick={hideMobileMenu}>Мои релизы</NavLink>
                    <NavLink className='menu__action nav__link' to='/shopCart' onClick={hideMobileMenu}>Корзина</NavLink>
                    <NavLink className='menu__action nav__link' to='/orders' onClick={hideMobileMenu}>Заказы</NavLink>
                    <a className='menu__action nav__link' onClick={handleLogout} href='/'>Выйти</a>
                </div>
            </div>}
        </header>
    )
}

export default Header