import React, {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import {NavLink} from "react-router-dom";

const Avatar = (props) => {
    const user = useSelector(state => state.user.artist)
    const avatarUrl = user ? user.profile_image : ''

    const avatar = String(avatarUrl) && String(avatarUrl).length < 10 ?
        <AccountCircleRoundedIcon onClick={props.toggleMenu}/> :
        <img className='avatar__image' src={avatarUrl} alt='user profile' onClick={props.toggleMenu}/>

    return (
    <div className='header__avatar'>
        {avatar}
    </div>
    )
}

export default Avatar