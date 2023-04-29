import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
const Notification = (props) => {
    const state = props.notification

    const [classList, setClassList] = useState('show')

    useEffect(() => {
        setTimeout(() => {
                setClassList('hide')
            },
            2500)
    })

    return (
        <>
            <div className={'notification notification_'+classList}>
                <h2 className="notification__title">{state.title} <CloseRoundedIcon className='notification__close'/></h2>
                <p className="notification__description">{state.description}</p>
                <NavLink to={state.action.url}>{state.action.button}</NavLink>
            </div>
        </>
    )
}

export default Notification