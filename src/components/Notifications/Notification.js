import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {useDispatch} from "react-redux";
import {removeNotification} from "../../reducers/notificationSlice";
const Notification = (props) => {
    const state = props.notification

    const [status, setStatus] = useState('show')

    const dispatch = useDispatch()

    const notificationType = props.classList ? `notification_${props.classList}` : ''

    console.log(state.id)

    useEffect(() => {
        setTimeout(() => {
            setStatus('hidden')
            // setTimeout(() => {
            //     dispatch(removeNotification())
            // })
        }, 2500)
    }, [state])

    const handleClose = () => {
        dispatch(removeNotification(state.id))
    }

    return (
        <>
            <div className={`notification ${notificationType} notification_${status}`}>
                <h2 className="notification__title">{state.title} <CloseRoundedIcon onClick={handleClose} className='notification__close'/></h2>
                <p className="notification__description">{state.description}</p>
                {state?.action?.url?.length > 1 && <NavLink className={'notification__link'} to={state?.action?.url}>{state?.action?.button}</NavLink>}
            </div>
        </>
    )
}

export default Notification