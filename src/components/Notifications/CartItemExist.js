import React from "react";
import Notification from "./Notification";

const CartItemExist = (props) => {
    const state = props.notification

    const notification = {
        title: 'Ошибка!',
        description: `Товар "${state.name}" уже находится в корзине`,
        action: {
            button: 'Перейти в корзину',
            url: '/shopCart'
        }
    }

    return <Notification notification ={notification} classList={'error'}/>
}

export default CartItemExist