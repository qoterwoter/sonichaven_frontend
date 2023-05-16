import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {handlePending,  handleError} from "./handleResponse";
import {API_URL, headers, user} from "./ordersSlice";
import {pushNotification} from "./notificationSlice";

const artistId = user?.artist?.id

export const fetchCart = createAsyncThunk('shopCart/fetchCart', async () => {
    const response = await axios.get(`${API_URL}/carts/${artistId}/`)

    return response.data
})

export const addCartItem = createAsyncThunk('shopCart/addCartItem', async ({cart, service, quantity}, {dispatch}) => {
    try {
        const response = await axios.post(`${API_URL}/cart-items/`, {cart, service: service.id, quantity}, {headers})
        dispatch(pushNotification({...service, quantity, notificationType: 'cartAppended'}))
        return response
    } catch (e) {
        dispatch(pushNotification({...service, notificationType: 'cartItemExist'}))
    }
})

export const deleteCartItem = createAsyncThunk('shopCart/deleteCartItem', async (id) => {
    return await axios.delete(`${API_URL}/cart-items/${id}/`, {headers})
})

export const changeCartItem = createAsyncThunk('shopCart/changeCartItem', async ({quantity, service, cart, id}) => {
    return await axios.put(`${API_URL}/cart-items/${id}/`, {
        service,
        cart,
        quantity

    }, {headers})
})


const initialState = {
    cart: '',
    cartId: 0,
    sum: 0,
    status: 'Загрузка...'
}

const shopCartSlice = createSlice({
    name: 'shopCart',
    initialState,
    reducers: {
        deleteItem: (state, action) => {
            console.log(action.payload)
            state.cart = state.cart.filter(item => item.id !== action.payload)
        },
        setSum: (state, action) => {
            state.sum = action.payload
        }
    },
    extraReducers: {
        [fetchCart.pending]: handlePending,
        [fetchCart.fulfilled]: (state, action) => {
            const data = action.payload[0]
            state.cart = data.items
            state.sum = data.sum
            state.cartId = data.id
            state.status = 'Успешно'
        },
        [fetchCart.rejected]: handleError,
        [addCartItem.rejected]: (state, action) => {
            // state.error =
            // console.log(action)
        }
    }
})

export const {deleteItem} = shopCartSlice.actions

export default shopCartSlice.reducer