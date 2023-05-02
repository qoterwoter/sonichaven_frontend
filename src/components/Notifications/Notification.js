import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {useDispatch} from "react-redux";
import {removeNotification} from "../../reducers/notificationSlice";
const Notification = (props) => {
    const state = props.notification

    const [classList, setClassList] = useState('show')

    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
                setClassList('hide')
            },
            2500)
    })

    const handleClose = () => {
        dispatch(removeNotification())
    }

    return (
        <>
            <div className={'notification notification_'+classList}>
                <h2 className="notification__title">{state.title} <CloseRoundedIcon onClick={handleClose} className='notification__close'/></h2>
                <p className="notification__description">{state.description}</p>
                <NavLink to={state.action.url}>{state.action.button}</NavLink>
            </div>
        </>
    )
}

export default Notification