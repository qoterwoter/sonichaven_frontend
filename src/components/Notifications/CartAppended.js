import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
const CartAppended = (props) => {
    const state = props.notification

    const [classList, setClassList] = useState('show')

    useEffect(() => {
        setTimeout(() => {
            setClassList('hide')
            },
2500)
    })

    return (
    <>
    <div className={'notification notification_'+classList}>
        <h2 className="notification__title">Товар добавлен в корзину! <CloseRoundedIcon className='notification__close'/></h2>
        <p className="notification__description">"{state.name}" в количестве {state.count} шт. добавлен в корзину.</p>
        <NavLink to='/shopCart'>Перейти в корзину</NavLink>
    </div>
    </>
    )
}

export default CartAppended