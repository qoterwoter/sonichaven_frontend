import React from "react";
import {useSelector} from "react-redux";
import CartAppended from "./CartAppended";
import OrderCompleted from "./OrderCompleted";

const NotificationsList = () => {
    const state = useSelector(state => state.notifications)
    return (
    <>
    <div className="notifications">
        {state.notifications.map(notification => {
            if(notification.notificationType==='cartAppended') {
                return <CartAppended notification={notification}/>
            }
            if(notification.notificationType==='orderComplete') {
                return <OrderCompleted notification={notification}/>
            }
            return null
        }) }
    </div>
    </>
    )
}

export default NotificationsList