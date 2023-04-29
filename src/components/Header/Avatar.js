import React, {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import {NavLink} from "react-router-dom";

const Avatar = (props) => {
    const user = useSelector(state => state.user.artist)
    const avatarUrl = user?.profile_image

    const handleClick = (event) => {
        console.log(props.isShow)
        event.stopPropagation();
        if (props.isShow && props.ref.current.contains(event.target)) {
            props.setIsShow(false);
        } else {
            props.setIsShow(!props.isShow);
        }
        console.log(props.isShow)
    };

    const avatar = String(avatarUrl) && String(avatarUrl).length < 10 ?
        <AccountCircleRoundedIcon onClick={handleClick}/> :
        <img className='avatar__image' src={avatarUrl} alt='user profile' onClick={handleClick}/>

    return (
    <div className='header__avatar'>
        {avatar}
    </div>
    )
}

export default Avatar