import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchCart} from "../features/reducers/shopCartSlice";

const ShopCart = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCart())
    },[dispatch])

    return (
    <>
    </>
    )
}

export default ShopCart