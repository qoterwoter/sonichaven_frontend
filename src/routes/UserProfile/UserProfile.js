import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCart} from "../../reducers/shopCartSlice";
import {fetchOrders} from "../../reducers/ordersSlice";
import {beautyNum} from "../ShopCart/ShopCart";
import Separator from "../../components/Separator";
import {NavLink} from "react-router-dom";
import UserProfileItem from "../../components/UserProfile/UserProfileItem";
import {fetchReleasesByArtist} from "../../reducers/releasesSlice";
import UserProfileMiniItem from "../../components/UserProfile/UserProfileMiniItem";
import UserProfileMiniItemAside from "../../components/UserProfile/UserProfileMiniItemAside";
import UserEditableItem from "../../components/UserProfile/UserEditableItem";

const showCount = (count, text) => {
    if (count % 10 === 1) return `${count} ${text}`
    if (count % 10 > 1 && count % 10 < 5) return `${count} ${text}а`
    else return `${count} ${text}ов`
}

const UserProfile = () => {
    const dispatch = useDispatch()

    const userData = useSelector(state => state.user)
    const artistData = userData.artist

    const releases = useSelector(state => state.releases?.releases)

    useEffect(() => {
        dispatch(fetchCart())
        dispatch(fetchOrders())
        dispatch(fetchReleasesByArtist(artistData.id))
    }, [dispatch, artistData])

    const shopCart = useSelector(state => state.shopCart)
    const orders = useSelector(state => state.orders)

    const ordersSum = orders.orders.reduce((acc, order) => acc + +order.sum, 0).toFixed(2)

    const shopCartItem = <>
        <p className="shopCart__countItems information__general">Количество товаров <Separator/> {showCount(shopCart.cart.length, 'Товар')}</p>
        <p className="shopCart__cartSum information__secondary">Сумма заказа <Separator/> {beautyNum(shopCart.sum)} Руб.</p>
        {shopCart.cart.length > 0 ?
            <NavLink className='item__action' to='/shopCart'>Перейти к корзине</NavLink> :
            <NavLink to='/catalog'>Перейти к каталогу</NavLink>
        }
    </>
    const orderItem = <>
        <p className="orders__countItems information__general">Количество заказов <Separator/> {showCount(orders.orders.length, 'Заказ')}</p>
        <p className="ordersSum information__secondary">Сумма заказов <Separator/> {beautyNum(ordersSum)} Руб.</p>
        <NavLink className='item__action' to='/orders'>Перейти к заказам</NavLink>
    </>
    const userItem = <>
        <UserEditableItem
            placeholder={'Имя'}
            value={userData.first_name + ' ' + userData.last_name}
            type={'text'}
            sendTo={'user_name'}/>
        <UserEditableItem
            placeholder={'Псевдоним артиста'}
            value={artistData?.name}
            type={'text'}
            sendTo={'artist_name'}
        />
        <UserEditableItem
            placeholder={'Почта'}
            value={userData.email}
            type={'email'}
            sendTo={'user_email'}
        />
    </>
    const artistItem = <>
        <div className="information__miniItems miniItems ">
            <UserProfileMiniItem
                title={'Изображение артиста'}
                description={<img className="artistData__profileImage" alt="" src={artistData?.profile_image}/>}
            />
            <UserProfileMiniItem
                title={'Описание артиста'}
                description={<p className="artistData__bio information__secondary">{artistData?.bio}</p>}
            />
        </div>
    </>
    const releasesItem = <div className={'releases__miniItems miniItems miniItems_vertical'}>
        {releases.map((release, id) => {
            return <UserProfileMiniItemAside
                key={String(release.id)}
                title={release.title}
                release = {release}
                description={<img className={'releaseData__releaseImage'} alt={''} src={release.image}/>}
                songs ={release.songs}
                asideTitle={'Список песен'}
            />
        })}
    </div>

    return (
    <main className='main'>
        <h2 className="block-title">Ваш профиль</h2>
        <section className="userProfile">
            <UserProfileItem title={'Личная информация'} description={userItem} classList={'item__userData'}/>
            <UserProfileItem title={'Карточка артиста'} description={artistItem} classList={'item__artistData'}/>
            <UserProfileItem title={'Релизы артиста'} description={releasesItem} classList={'item__releasesData'}/>
            <UserProfileItem title={'Корзина'} description = {shopCartItem} classList={'item__shopCart'}/>
            <UserProfileItem title={'Заказы'} description = {orderItem} classList={'item__orders'}/>
        </section>
    </main>
    )
}

export default UserProfile