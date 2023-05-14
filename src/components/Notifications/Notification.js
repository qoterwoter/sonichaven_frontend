import React from "react";
import {NavLink} from "react-router-dom";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {useDispatch} from "react-redux";
import {removeNotification} from "../../reducers/notificationSlice";
const Notification = (props) => {
    const state = props.notification

    const isNav = props.isNav !== false && true

    const dispatch = useDispatch()

    const notificationType = props.classList ? `notification_${props.classList}` : ''

    const handleClose = () => {
        dispatch(removeNotification())
    }

    return (
        <>
            <div className={`notification ${notificationType}`}>
                <h2 className="notification__title">{state.title} <CloseRoundedIcon onClick={handleClose} className='notification__close'/></h2>
                <p className="notification__description">{state.description}</p>
                {isNav && <NavLink to={state?.action?.url}>{state?.action?.button}</NavLink>}
            </div>
        </>
    )
}

export default Notification