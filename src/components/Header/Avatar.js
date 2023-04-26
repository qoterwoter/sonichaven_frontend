import React, {useState} from "react";
import {useSelector} from "react-redux";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import {NavLink} from "react-router-dom";

const Avatar = (props) => {
    const user = useSelector(state => state.user.artist)
    const avatarUrl = user ? user.profile_image : ''

    const [menuClass, setMenuClass] = useState('hide')

    const toggleMenu = () => {
        if(menuClass==='hide') setMenuClass('show')
        else setMenuClass('hide')
    }

    const avatar = String(avatarUrl) && String(avatarUrl).length < 10 ?
        <AccountCircleRoundedIcon onClick={toggleMenu}/> :
        <img className='avatar__image' src={avatarUrl} alt='user profile image' onClick={toggleMenu}/>

    const bottomMenu =
        <div className={'avatar__menu menu menu_'+menuClass} onClick={toggleMenu}>
            <NavLink className='menu__action nav__link' to='/shopCart' >Корзина</NavLink>
            <a className='menu__action nav__link' onClick={props.handleLogout}>Выйти</a>
        </div>

    return (
    <div className='header__avatar'>
        {avatar}
        {bottomMenu}
    </div>
    )
}

export default Avatar