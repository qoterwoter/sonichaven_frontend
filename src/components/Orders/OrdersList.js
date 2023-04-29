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
    }).reverse()

    return (
    <main className='main'>
        <div className="orders">
            <h2 className='orders__title block-title'>Список заказов</h2>
            {orderItems}
        </div>
    </main>
    )
}

export default OrdersList