import React from "react";
import {beautyNum} from "../ShopCart/ShopCart";

const OrderItem = (props) => {
    const order = props.order;
    const services = order.items

    const itemsList = services.map(item => {
        const service = item.service
        const sum = (item.quantity * +service.cost).toFixed(2)

        return (
        <div className='order__service service' key={item.id}>
            <h3 className="service__title">{service.name} - {item.quantity} шт</h3>
            <p className="service__description">{service.description}</p>
            <p className="service__cost">{sum > 999 ? beautyNum(sum) : sum} Руб.</p>
        </div>)
    })

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZone: "UTC"
    };

    const date = new Date(order.created_at).toLocaleDateString('ru',options)
    console.log(date)

    return (
    <>
        <div className="orders__order order">
            <h2 className="order__title">Заказ от {date}</h2>
            {itemsList}
            <p className="order__sum">Общая сумма заказа <span className="span__border">·</span> {beautyNum(order.sum)} Руб.</p>
        </div>
    </>
    )
}

export default OrderItem