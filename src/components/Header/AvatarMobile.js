import React, {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import {NavLink} from "react-router-dom";

const AvatarMobile = (props) => {
    const user = useSelector(state => state.user.artist)
    const avatarUrl = user?.profile_image

    const avatar = avatarUrl.length < 10 ?
        <AccountCircleRoundedIcon className={'icon icon_user'} onClick={props.toggleMenu}/> :
        <img className='avatar__image' src={avatarUrl} alt='user profile' onClick={props.toggleMenu}/>

    return (
    <div className='header__avatar'>
        {avatar}
    </div>
    )
}

export default AvatarMobile