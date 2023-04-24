import React, {useEffect, useState} from "react";
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import GraphicEqRoundedIcon from '@mui/icons-material/GraphicEqRounded';
import MicExternalOnRoundedIcon from '@mui/icons-material/MicExternalOnRounded';
import HeadphonesRoundedIcon from '@mui/icons-material/HeadphonesRounded';
import SurroundSoundRoundedIcon from '@mui/icons-material/SurroundSoundRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import {useDispatch, useSelector} from "react-redux";
import {addCartItem} from "../reducers/shopCartSlice";
import CartAppended from "../../components/Notifications/CartAppended";
import {NavLink} from "react-router-dom";
import {beautyNum} from "../../components/ShopCart/ShopCart";

export const getIcon = (service, className) => {
    if (service.type === 'Exclusive' || service.type === 'Exclusive+') return <MusicNoteRoundedIcon className={className}/>
    if (service.type === 'Mixing' || service.type === 'Mixing+') return <GraphicEqRoundedIcon className={className}/>
    if (service.type === 'Leasing' || service.type === 'Leasing+') return <HeadphonesRoundedIcon className={className}/>
    if (service.type === 'Production') return <SurroundSoundRoundedIcon className={className}/>
    if (service.type === 'Key') return <KeyRoundedIcon className={className}/>
    if (service.type === 'Record') return <MicExternalOnRoundedIcon className={className}/>
}

const CatalogItem = (props) => {
    const service = props.service

    const dispatch = useDispatch()
    const cartId = useSelector(state=>state.user.cart_id)
    const isLogin = useSelector(state=>state.user.is_artist)

    const [notification, showNotification] = useState(false)

    useEffect(() => {
        if(notification===true) {
            setTimeout(() => {
                showNotification(false)
            },2000)
        }
    })

    const addServiceToCart = (e) => {
        showNotification(true)
        dispatch(addCartItem({
            cart: cartId,
            service: service.id
        }))
    }

    const button = isLogin ?
        <button className='service__addToCart' onClick={addServiceToCart}>Добавить в корзину</button> :
        <NavLink className='service__addToCart' to='/auth'>Войти</NavLink>

    return (
    <>
    <div key={service.id} className='catalog__service service'>
        <h2 className='service__title'>{service.name} {getIcon(service, 'service__icon icon')}</h2>
        <p className="service__description">{service.description}</p>
        <p className='service__cost'>{beautyNum(service.cost)} Руб</p>
        {button}
    </div>
    <CartAppended service={service} isShow={notification}/>
    </>
    )
}

export default CatalogItem