import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCart} from "../../features/reducers/shopCartSlice";
import CartItem from "./CartItem";
import {makeOrder, resetStatus} from "../../features/reducers/ordersSlice";
import {NavLink} from "react-router-dom";
import {pushNotification} from "../../features/reducers/notificationSlice";
import NotificationsList from "../Notifications/NotificationsList";

const beautyNum = num => {
    num=`${num}`
    const lastDigits = num.slice(-2)
    let fullNum = Array(...num.slice(0,-3)).reverse().map((digit,id) => {
        if(id % 3 === 0 && id !== num.length-1) {
            return digit + '.'
        }
        return digit
    }).reverse().join('').slice(0,-1)

    return `${fullNum},${lastDigits}`
}

const ShopCart = () => {
    const dispatch = useDispatch()
    const shopCart = useSelector(state => state.shopCart)
    const orderStatus = useSelector(state => state.orders.orderStatus)

    useEffect(() => {
        dispatch(fetchCart())
    },[dispatch])


    useEffect(() => {
        if(orderStatus==='Заказ успешно оформлен') {
            dispatch(pushNotification({notificationType: 'orderComplete'}))
        }
    },[orderStatus, dispatch])

    const handleOrder = async () => {
        await dispatch(makeOrder())
        dispatch(resetStatus())
        dispatch(fetchCart())
    }

    const cartItems = shopCart.cart && shopCart.cart.map(cart => {
        return <CartItem cartId = {shopCart.cartId} item={cart}/>
    })

    const onEmpty = (
    <div className='shop-cart__empty empty'>
        <h2 className="empty__title">Ваша корзина пуста!</h2>
        <NavLink className='empty__action' to='/catalog'>Каталог</NavLink>
    </div>
    )

    return (
    <main className='main'>
        <div className="shopCart">
            <h2 className="shop-cart__title block-title">Корзина</h2>
            {
                cartItems.length > 0 ?
                <>
                    <section className="shop-cart__items">
                        {cartItems}
                    </section>
                    <div className="shop-cart__bottomMenu block-title">
                        <p className='shop-cart__sum'>Сумма - {beautyNum(shopCart.sum)} Руб.</p>
                        <button className='shop-cart__make-order button button__success' onClick={handleOrder}>Оформить заказ</button>
                    </div>
                </> :
                onEmpty
            }
        </div>
        <NotificationsList/>
    </main>
    )
}

export {beautyNum}

export default ShopCart