import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCart} from "../../reducers/shopCartSlice";
import CartItem from "./CartItem";
import {makeOrder, resetStatus} from "../../reducers/ordersSlice";
import {NavLink} from "react-router-dom";
import {pushNotification} from "../../reducers/notificationSlice";

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

    const cartItems = shopCart.cart && shopCart.cart.map((cart, id) => {
        return <CartItem cartId = {shopCart.cartId} item={cart} key={`cartItem${id}`}/>
    })

    const onEmpty = (
    <div className='shopCart__empty empty'>
        <h2 className="empty__title">Ваша корзина пуста!</h2>
        <NavLink className='empty__action' to='/catalog'>Каталог</NavLink>
    </div>
    )

    return (
    <main className='main'>
        <div className="shopCart">
            <h2 className="shopCart__title block-header">Корзина</h2>
            {
                cartItems.length > 0 ?
                <>
                    <section className="shopCart__items">
                        {cartItems}
                    </section>
                    <div className="shopCart__bottomMenu block-header">
                        <p className='shopCart__sum'>Сумма<span className="span__border"> · </span>{beautyNum(shopCart.sum)} Руб.</p>
                        <button className='shopCart__make-order button button__success' onClick={handleOrder}>Оформить заказ</button>
                    </div>
                </> :
                onEmpty
            }
        </div>
    </main>
    )
}

export {beautyNum}

export default ShopCart