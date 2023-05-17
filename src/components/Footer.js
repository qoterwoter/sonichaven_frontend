import React from "react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Footer = () => {
    const isAuth = useSelector(state => state.user.token)

    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__menu">
                    <div className="menu__links">
                        <h3 className="links__title">Контакты</h3>
                        <nav className={'links'}>
                            <a className={'links__link link'} href="https://vk.com/sonichaven" target="_blank">ВКонтакте</a>
                            <a className={'links__link link'} href="https://t.me/sonichaven" target="_blank">Telegram</a>
                            <a className="contacts-information__link" href="mailto:marderics@gmail.com">Email</a>
                        </nav>
                    </div>
                    <div className="menu__links">
                        <h3 className="links__title">Меню сайта</h3>
                        <nav className={'links'}>
                            <NavLink className='links__link link' to='/'>Главная</NavLink>
                            <NavLink className='links__link link' to='/about-us'>О нас</NavLink>
                            <NavLink className='links__link link' to='/catalog'>Каталог</NavLink>
                        </nav>
                    </div>
                    {isAuth &&
                        <div className="menu__links">
                            <h3 className="links__title">Моя информация</h3>
                            <nav className={'links'}>
                                <NavLink className='links__link link' to='/userProfile'>Мой профиль</NavLink>
                                <NavLink className='links__link link' to='/releases'>Мои релизы</NavLink>
                                <NavLink className='links__link link' to='/shopCart'>Корзина</NavLink>
                                <NavLink className='links__link link' to='/orders'>Заказы</NavLink>
                            </nav>
                        </div>}
                </div>
                <div className="footer__copyright">
                    <p className='footer__description'>© SonicHaven 2023</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer