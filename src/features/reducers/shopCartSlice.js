import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {handlePending,  handleError} from "./handleResponse";

const user = JSON.parse(localStorage.getItem('user')) || {}


export const fetchCart = createAsyncThunk('shopCart/fetchCart', async () => {
    const response = await axios.get('http://sonichaven-backend.std-962.ist.mospolytech.ru/api/carts/', {
        headers: {'Authorization': `Token ${user.token}`}
    })

    return response.data
})

const initialState = {
    cart: '',
    status: 'Загрузка'
}

const shopCartSlice = createSlice({
    name: 'shopCart',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchCart.pending]: handlePending,
        [fetchCart.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.cart = action.payload
        },
        [fetchCart.rejected]: handleError,
    }
})

export default shopCartSlice.reducer