import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {NavLink} from "react-router-dom";

const CartItemExist = (props) => {
    const state = props.notification


    return (
        <>
            <div className={'notification notification_'+state.classList}>
                <h2 className="notification__title">Товар уже есть в корзине! <CloseRoundedIcon className='notification__close'/></h2>
                <p className="notification__description">"{state.name}" уже находится в корзине</p>
                <NavLink to='/shopCart'>Перейти в корзину</NavLink>
            </div>
        </>
    )
}

export default CartItemExist