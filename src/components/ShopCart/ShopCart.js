import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCart} from "../../features/reducers/shopCartSlice";
import CartItem from "./CartItem";
import {makeOrder} from "../../features/reducers/ordersSlice";

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


    useEffect(() => {
        dispatch(fetchCart())
    },[dispatch])

    const handleOrder = () => {
        dispatch(makeOrder())
        dispatch(fetchCart())
    }

    const cartItems = shopCart.cart && shopCart.cart.map(cart => {
        return <CartItem cartId = {shopCart.cartId} item={cart}/>
    })

    return (
    <main className='main'>
        <div className="shopCart">
            <h2 className="shop-cart__title block-title">Корзина</h2>
            <section className="shop-cart__items">
                {cartItems}
            </section>
            <p className="shop-cart__sum block-title">Сумма - {beautyNum(shopCart.sum)} Руб.
                <button className='button' onClick={handleOrder}>Оформить заказ</button>
            </p>
        </div>
    </main>
    )
}

export {beautyNum}

export default ShopCart