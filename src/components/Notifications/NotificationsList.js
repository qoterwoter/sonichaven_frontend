import React from "react";
import {useSelector} from "react-redux";
import CartAppended from "./CartAppended";
import OrderCompleted from "./OrderCompleted";
import AuthError from "./AuthError";
import CartItemExist from "./CartItemExist";

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
            if (notification.notificationType==='cartItemExist') {
                console.log('noti')
                return <CartItemExist notification={notification}/>
            }
            if(notification.notificationType==='orderComplete') {
                return <OrderCompleted notification={notification}/>
            }
            if(notification.notificationType==='error') {
                return <AuthError notification={notification} isNav={false}/>
            }
            return null
        }) }
    </div>
    </>
    )
}

export default NotificationsList