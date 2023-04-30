import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCart} from "../../reducers/shopCartSlice";
import {fetchOrders} from "../../reducers/ordersSlice";
import {beautyNum} from "../ShopCart/ShopCart";
import Separator from "../../components/Separator";
import {NavLink} from "react-router-dom";

const showCount = (count, text) => {
    if (count % 10 === 1) return `${count} ${text}`
    if (count % 10 > 1 && count % 10 < 5) return `${count} ${text}а`
    else return `${count} ${text}ов`
}

const UserProfile = () => {
    const dispatch = useDispatch()

    const userData = useSelector(state => state.user)
    const artistData = userData.artist

    useEffect(() => {
        dispatch(fetchCart())
        dispatch(fetchOrders())
    }, [dispatch])

    const shopCart = useSelector(state => state.shopCart)
    const orders = useSelector(state => state.orders)

    const ordersSum = orders.orders.reduce((acc, order) => acc + +order.sum, 0).toFixed(2)

    return (
    <main className='main'>
        <h2 className="block-title">Ваш профиль</h2>
        <section className="userProfile">
            <article className="userProfile__item item__shopCart">
                <h3 className="item__title">Ваша корзина</h3>
                <div className="item__information">
                    <p className="shopCart__countItems">Количество товаров <Separator/> {showCount(shopCart.cart.length, 'Товар')}</p>
                    <p className="shopCart__cartSum">Сумма заказа <Separator/> {beautyNum(shopCart.sum)} Руб.</p>
                    <NavLink to='/shopCart'>Перейти к корзине</NavLink>
                </div>
            </article>
            <article className="userProfile__item item__orders">
                <h3 className="item__title">Ваши заказы</h3>
                <div className="item__information">
                </div>
                <p className="orders__countItems">Количество заказов <Separator/> {showCount(orders.orders.length, 'Заказ')}</p>
                <p className="ordersSum">Сумма заказов <Separator/> {beautyNum(ordersSum)} Руб.</p>
                <NavLink to='/orders'>Перейти к заказам</NavLink>
            </article>
            <article className="userProfile__item item__userData">
                <h3 className="item__title">Личная информация</h3>
                <div className="item__information">
                    <p className="userData__userName">Имя <Separator/> {userData.first_name + ' ' + userData.last_name}</p>
                    <p className="userData__userEmail">Почта <Separator/> {userData.email}</p>
                </div>
            </article>
            <article className="userProfile__item item__artistData">
                <h3 className="item__title">Карточка артиста</h3>
                <div className="item__information">
                    <p className="artistData__name">Имя артиста <Separator/> {artistData.name}</p>
                    <p className="artistData__bio">Описание артиста <Separator/> {artistData.bio}</p>
                    <img className="artistData__profileImage" alt="" src={artistData.profile_image}/>
                </div>
            </article>
        </section>
    </main>
    )
}

export default UserProfile