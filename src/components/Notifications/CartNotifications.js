import React, {useState} from "react";
import {useSelector} from "react-redux";
import CartAppended from "./CartAppended";

const CartNotifications = () => {
    const state = useSelector(state => state.notifications)
    return (
    <>
    <div className="notifications">
        {state.notifications.map(notification => {
            return <CartAppended notification={notification}/>
        }) }
    </div>
    </>
    )
}

export default CartNotifications