import React from "react";
import {beautyNum} from "../ShopCart/ShopCart";
import Separator from "../../components/Separator";

const OrderItem = (props) => {
    const order = props.order;
    const services = order.items

    const itemsList = services.map(item => {
        const service = item.service
        const sum = (item.quantity * +service.cost).toFixed(2)

        return (
        <div className='order__service service' key={item.id}>
            <h3 className="service__title">{service.name}<Separator/>{item.quantity} шт</h3>
            <p className="service__description">{service.description}</p>
            <p className="service__cost">Стоимость<Separator/>{sum > 999 ? beautyNum(sum) : sum} Руб.</p>
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

    const STATUS_CHOICES = {
        'PEND': ['Ожидание подтверждения', 'pending'],
        'CONF': ['Подтверждено', 'confirmed'],
        'SHIP': ['В работе', 'in-progress'],
        'DELV': ['Завершен', 'delivered'],
        'CANC': ['Отменено', 'cancelled'],
    };

    const getInfoByKey = (key) => [
            STATUS_CHOICES[key][0],
            STATUS_CHOICES[key][1],
        ];

    const [status, classList] = getInfoByKey(order.status)

    return (
    <>
        <div className="orders__order order">
            <h2 className="order__title">Заказ от {date} <span className={`order__status order__status_${classList}`}>{status}</span></h2>
            {itemsList}
            {itemsList.length > 1 && <p className="order__sum">Сумма заказа <Separator/> {beautyNum(order.sum)} Руб.</p>}
        </div>
    </>
    )
}

export default OrderItem