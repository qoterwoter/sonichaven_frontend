import React, {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import {changeCartItem, deleteCartItem, deleteItem, fetchCart} from "../../reducers/shopCartSlice";
import {beautyNum} from "./ShopCart";
import {getIcon} from "../Catalog/CatalogItem";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import {pushNotification} from "../../reducers/notificationSlice";

const CartItem = (props) => {
    const service = props.item.service
    const dispatch = useDispatch()
    let quantity = props.item.quantity

    const [count, setCount] = useState(quantity)
    const [sum, setSum] = useState(beautyNum(service.cost * quantity + '.00'))
    const [isEdit, setEdit] = useState(false)
    const [button, setButton] = useState('')


    const toggleEdit = () => {
        setEdit(!isEdit)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        toggleEdit()
        const data = {
            quantity: +count,
            service: service.id,
            cart: props.cartId,
            id: props.item.id
        }
        dispatch(pushNotification({description: 'Корзина успешно сохранена!',notificationType: 'saved'}))
        await dispatch(changeCartItem(data))
        dispatch(fetchCart())
    }

    const handleDelete = async (e) => {
        dispatch(deleteItem(props.item.id))
        await dispatch(deleteCartItem(props.item.id))
        dispatch(fetchCart())
    }

    const increment = () => {
        setCount(count+1)
        setSum(beautyNum(service.cost * (count+1) + '.00'))
    }

    const decrement = () => {
        if (count !== 1) {
            setSum(beautyNum(service.cost * (count-1) + '.00'))
            setCount(count - 1)
        }

    }

    useEffect(() => {
        if (isEdit) {
            setButton(<>
                    <div className="actions__change">
                        <RemoveRoundedIcon className={'actions__count'} onClick={decrement}/>
                        {count}
                        <AddRoundedIcon className={'actions__count'} onClick={increment}/>
                    </div>
                <CheckRoundedIcon className={'icon icon_save actions__edit'} onClick={handleSubmit}/>
                </>)
        }
        else setButton(<EditRoundedIcon className='actions__edit icon icon_edit' onClick={toggleEdit}/>)
    }, [isEdit, count])

    return (
    <>
        <article key={props.item.id} className="shop-cart__item item">
            <div className="item__content">
                <h3 className="item__title">{getIcon(service, 'item__icon icon')} {service.name} <span className="span__border">·</span> {count} шт.</h3>
                <p className="item__description">{service.description}</p>
            </div>
            <div className={`item__bottom-menu ${isEdit ? 'edit' : ''} `}>
                <p className="item__cost">Стоимость<span className="span__border"> · </span>{sum} Руб.</p>
                <form className="item__actions actions form" onSubmit={handleSubmit}>
                    <DeleteRoundedIcon alt='Удалить' className='actions__delete action icon' onClick={handleDelete}/>
                    {button}
                </form>
            </div>
        </article>
    </>
    )
}

export default CartItem