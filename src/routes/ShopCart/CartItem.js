import React, {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import {changeCartItem, deleteCartItem, deleteItem, fetchCart} from "../../reducers/shopCartSlice";
import {beautyNum} from "./ShopCart";
import {getIcon} from "../Catalog/CatalogItem";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const CartItem = (props) => {
    const service = props.item.service
    const dispatch = useDispatch()
    let quantity = props.item.quantity

    const [count, setCount] = useState(quantity)
    const [sum, setSum] = useState(beautyNum(service.cost * quantity + '.00'))
    const [isEdit, setEdit] = useState(false)
    const [button, setButton] = useState('')

    const onChangeCount = (e) => {
        setCount(e.target.value)
        setSum(beautyNum(service.cost * e.target.value + '.00'))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            quantity: +count,
            service: service.id,
            cart: props.cartId,
            id: props.item.id
        }
        await dispatch(changeCartItem(data))
        dispatch(fetchCart())
    }

    const handleDelete = async (e) => {
        dispatch(deleteItem(props.item.id))
        await dispatch(deleteCartItem(props.item.id))
        dispatch(fetchCart())
    }

    const toggleEdit = () => {
        setEdit(!isEdit)
    }

    useEffect(() => {
        if (isEdit) {
            setButton(<>
                    <div className="actions__type">
                        <label className='actions__label label' htmlFor={'count' + props.item.id}>Количество:</label>
                        <input className='actions__input input' type='number' id={'count' + props.item.id}
                               onChange={onChangeCount} value={count}/>
                    </div>
                    <input className='actions__submit button' type='submit' value='Сохранить' onClick={toggleEdit}/>
                </>)
        }
        else setButton(<EditRoundedIcon className='actions__edit icon' onClick={toggleEdit}/>)
    }, [isEdit, count, props, toggleEdit])

    return (
    <>
        <article key={props.item.id} className="shop-cart__item item">
            <div className="item__content">
                <h3 className="item__title">{getIcon(service, 'item__icon icon')} {service.name} <span className="span__border">·</span> {count} шт.</h3>
                <p className="item__description">{service.description}</p>
            </div>
            <div className="item__bottom-menu">
                <p className="item__cost">Стоимосить<span className="span__border"> · </span>{sum} Руб.</p>
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