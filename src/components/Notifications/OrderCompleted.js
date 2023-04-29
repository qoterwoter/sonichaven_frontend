import React from "react";
import Notification from "./Notification";

const OrderCompleted = (props) => {
    const notification = {
        title: 'Заказ оформлен!',
        description: 'Заказ успешно оформлен и находится на вкладке "Заказы"',
        action: {
            button: 'Перейти к заказам',
            url: '/orders'
        }
    }

    return <Notification notification={notification}/>
}

export default OrderCompleted