import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addCartItem} from "../../features/reducers/shopCartSlice";
import CartAppended from "../Notifications/CartAppended";
import {NavLink} from "react-router-dom";
import {beautyNum} from "../ShopCart/ShopCart";

import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import GraphicEqRoundedIcon from '@mui/icons-material/GraphicEqRounded';
import MicExternalOnRoundedIcon from '@mui/icons-material/MicExternalOnRounded';
import HeadphonesRoundedIcon from '@mui/icons-material/HeadphonesRounded';
import SurroundSoundRoundedIcon from '@mui/icons-material/SurroundSoundRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import {pushNotification} from "../../features/reducers/notificationSlice";

export const getIcon = (service, className) => {
    if (service.type === 'Exclusive' || service.type === 'Exclusive+') return <MusicNoteRoundedIcon className={className}/>
    if (service.type === 'Mixing' || service.type === 'Mixing+') return <GraphicEqRoundedIcon className={className}/>
    if (service.type === 'Leasing' || service.type === 'Leasing+') return <HeadphonesRoundedIcon className={className}/>
    if (service.type === 'Production') return <SurroundSoundRoundedIcon className={className}/>
    if (service.type === 'Key') return <KeyRoundedIcon className={className}/>
    if (service.type === 'Record') return <MicExternalOnRoundedIcon className={className}/>
    if (service.type === 'Distribution') return <LibraryMusicRoundedIcon className={className}/>
}

const CatalogItem = (props) => {
    const service = props.service

    const dispatch = useDispatch()
    const cartId = useSelector(state=>state.user.cart_id)
    const isLogin = useSelector(state=>state.user.is_artist)

    const [count, setCount] = useState(1)

    const setNotification = () => {
        dispatch(pushNotification({...service, count}, {dispatch}))
    }

    const addServiceToCart = (e) => {
        setNotification()
        dispatch(addCartItem({
            cart: cartId,
            service: service.id,
            quantity: count,
        }))
    }

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        if (count != 1)
            setCount(count-1)
    }

    return (
    <>
    <div key={service.id} className='catalog__service service'>
        <h2 className='service__title'>{service.name} {getIcon(service, 'service__icon icon')}</h2>
        <p className="service__description">{service.description}</p>
        <p className='service__cost'>{beautyNum(service.cost)} Руб</p>
        <div className="service__actions">
            {isLogin ?
                <>
                    <button className='service__addToCart button' onClick={addServiceToCart}>Добавить в корзину</button>
                    <p className="service__count count">
                        <RemoveRoundedIcon className="count__setCount button" onClick={decrement}/>
                        {count}
                        <AddRoundedIcon className="count__setCount button" onClick={increment}/>
                    </p>
                </> :
                <NavLink className='service__addToCart' to='/auth'>Войти</NavLink>}
        </div>
    </div>
    </>
    )
}

export default CatalogItem