import React from "react";
import {useSelector} from "react-redux";
import CartAppended from "./CartAppended";
import OrderCompleted from "./OrderCompleted";
import NotificationError from "./NotificationError";

const NotificationsList = () => {
    const state = useSelector(state => state.notifications)
    return (
    <>
    <div className="notifications">
        {state.notifications.map(notification => {
            console.log(notification)
            if(notification.notificationType==='cartAppended') {
                return <CartAppended notification={notification}/>
            }
            if(notification.notificationType==='orderComplete') {
                return <OrderCompleted notification={notification}/>
            }
            if(notification.notificationType==='error') {
                return <NotificationError notification={notification} isNav={false}/>
            }
            return null
        }) }
    </div>
    </>
    )
}

export default NotificationsList