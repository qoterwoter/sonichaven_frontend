import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import CartAppended from "./CartAppended";
import OrderCompleted from "./OrderCompleted";
import AuthError from "./AuthError";
import CartItemExist from "./CartItemExist";
import ChangeSaved from "./ChangeSaved";

const NotificationsList = () => {
    const state = useSelector(state => state.notifications.notifications)

    const addNotification = (notification, id) => {
        const key = `notification${id}`

        if(notification.notificationType==='cartAppended') {
            return <CartAppended key={key} notification={notification}/>
        }
        if (notification.notificationType==='cartItemExist') {
            return <CartItemExist key={key}  notification={notification}/>
        }
        if(notification.notificationType==='orderComplete') {
            return <OrderCompleted key={key}  notification={notification}/>
        }
        if(notification.notificationType==='error') {
            return <AuthError key={key}  notification={notification}/>
        }
        if (notification.notificationType==='saved') {
            return <ChangeSaved key={key}  notification={notification}/>
        }
        return null
    }

    return (
    <div className="notifications">
        {state.map(addNotification)}
    </div>
    )
}

export default NotificationsList