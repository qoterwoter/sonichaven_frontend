import React from "react";
import Notification from "./Notification";

const CartAppended = (props) => {
    const state = props.notification

    const notification = {
        title: 'Товар добавлен в корзину!',
        description: `"${state.name}" в количестве ${state.quantity} шт. добавлен в корзину.`,
        action: {
            button: 'Перейти в корзину',
            url: '/shopCart'
        }
    }

    return <Notification notification ={notification}/>
}

export default CartAppended