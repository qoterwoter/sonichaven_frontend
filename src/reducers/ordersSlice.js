import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {handlePending} from "./handleResponse";


const API_URL = 'http://sonichaven-backend.std-962.ist.mospolytech.ru/api'
const user = JSON.parse(localStorage.getItem('user')) || {}
const headers = {'Authorization': `Token ${user.token}`}

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
    const response = await axios.get(`${API_URL}/cart_order_list/`, {headers})
    return response.data
})

export const makeOrder = createAsyncThunk('shopCart/makeOrder', async () => {
    return await axios.post(`${API_URL}/cart_order_list/`, {}, {headers})
})

const initialState = {
    orders: [],
    orderStatus: ''
}

const ordersSlice = createSlice(({
    name: 'orders',
    initialState,
    reducers: {
        resetStatus: state => {
            state.orderStatus = ''
        }
    },
    extraReducers: {
        [makeOrder.pending]: (state) => {
            state.orderStatus = 'Оформляем заказ...'
        },
        [makeOrder.fulfilled]: state => {
            state.orderStatus = 'Заказ успешно оформлен'
        },
        [makeOrder.rejected]: state => {
            state.orderStatus = 'Ошибка при оформлении заказа'
        },
        [fetchOrders.pending]: handlePending,
        [fetchOrders.fulfilled]: (state, action) => {
            const data = action.payload;
            state.orders = [...data]
        }
    }
}))

export const {resetStatus} = ordersSlice.actions

export default ordersSlice.reducer