import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchOrders} from "../../features/reducers/ordersSlice";
import OrderItem from "./OrderItem";

const OrdersList = () => {
    const dispatch = useDispatch()
    const orders = useSelector(state => state.orders.orders)

    useEffect(() => {
        dispatch(fetchOrders())
    }, [dispatch])

    console.log(orders)

    const orderItems = orders && orders.map(order => {
        return <OrderItem order={order}/>
    })

    return (
    <main className='main'>
        <h2 className='block-title'>Список заказов</h2>
        {orderItems}
    </main>
    )
}

export default OrdersList