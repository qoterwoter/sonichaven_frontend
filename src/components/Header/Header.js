import React, {useEffect, useRef, useState} from "react";
import {Link, NavLink  } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {unAuthorize} from "../../reducers/userSlice";
import Avatar from "./Avatar";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

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

        return () => {mediaQuery.removeEventListener('change', handleMediaQuery)}
    }, [])

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    const loginButtons = <Avatar handleLogout={handleLogout} isShow={isShow} setIsShow={setIsShow}/>
    const logoutButton = <NavLink className='nav__link' to='auth'>Войти</NavLink>

    const mainLinks = (
        <nav className='header__nav nav menu'>
            <NavLink className='nav__link' to='/' onClick={hideMenu}>Главная</NavLink>
            <NavLink className='nav__link' to='/about-us' onClick={hideMenu}>О нас</NavLink>
            <NavLink className='nav__link' to='/catalog' onClick={hideMenu}>Каталог</NavLink>
            <NavLink className='nav__link' to='/news' onClick={hideMenu}>Новости</NavLink>
            <NavLink className='nav__link' to='/releases' onClick={hideMenu}>Релизы</NavLink>
            <NavLink className='nav__link' to='/faq' onClick={hideMenu}>F.A.Q.</NavLink>
        </nav>
    )

    const userLinks = (
    <>
        <NavLink className='menu__action nav__link' to='/userProfile' onClick={hideMenu}>Мой профиль</NavLink>
        <NavLink className='menu__action nav__link' to={'/myReleases'} onClick={hideMenu}>Мои релизы</NavLink>
        <NavLink className='menu__action nav__link' to='/shopCart' onClick={hideMenu}>Корзина</NavLink>
        <NavLink className='menu__action nav__link' to='/orders' onClick={hideMenu}>Заказы</NavLink>
        <a className='menu__action nav__link' onClick={handleLogout} href='/'>Выйти</a>
    </>
    )

    return (
        <header>
            <div className='header' ref={ref}>
                <div className="container">
                    <Link className='header__logo' to='/'>SonicHaven</Link>
                    {isMobile ? null : mainLinks
                    }
                    {isMobile ?
                        <MenuRoundedIcon className={'icon icon_edit'} onClick={toggleMenu}/> :
                        buttons}
                </div>
            </div>
            {isShow && <div className="header__bottomMenu">
                <div className={'menu'} ref={ref}>
                    {userLinks}
                </div>
            </div>}
            {showMenu &&
                <div className={'header__mobileMenu'}>
                    {mainLinks}

                    <div className="menu">
                        <h2 className="menu__title">Моя информация</h2>
                        {isAuth ? userLinks :
                            logoutButton
                        }
                    </div>
                </div>}
        </header>
    )
}

export default Header