import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchOrders} from "../../reducers/ordersSlice";
import OrderItem from "./OrderItem";

const OrdersList = () => {
    const dispatch = useDispatch()
    const orders = useSelector(state => state.orders.orders)

    useEffect(() => {
        dispatch(fetchOrders())
    }, [dispatch])

    const orderItems = orders && orders.map((order, id) => {
        return <OrderItem order={order} key={`order${id}`}/>
    }).reverse()



    return (
    <main className='main'>
        <div className="orders">
            <h2 className='orders__title block-header'>Список заказов</h2>
            {orderItems}
        </div>
    </main>
    )
}

export default OrdersList