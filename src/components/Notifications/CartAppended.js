import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
const CartAppended = (props) => {
    const [isShow, setIsShow] = useState('notification_hide')

    useEffect(() => {
        if (props.isShow) {
            setIsShow('notification_show')
        }
        if(!props.isShow) {
            setIsShow('notification_hide')
        }
    },)

    return (
    <>
    <div className={'notification '+isShow}>
        <h2 className="notification__title">Товар добавлен в корзину! <CloseRoundedIcon className='notification__close'/></h2>
        <p className="notification__description">"{props.service.name}" в количестве {props.count} шт. добавлен в корзину.</p>
        <NavLink to='/shopCart'>Перейти в корзину</NavLink>
    </div>
    </>
    )
}

export default CartAppended