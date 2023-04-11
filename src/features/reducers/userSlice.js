import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import handleError, {handlePending} from "./handleResponse";

const API_URL = 'http://sonichaven-backend.std-962.ist.mospolytech.ru/api/'
const user = JSON.parse(localStorage.getItem('user')) || {}

export const authArtist = createAsyncThunk('artist/authArtist', async ({username, password}) => {
    console.log(username, password)
    const response = await axios.post(
        API_URL + 'login/',
        {
            username, password
        }
    )

    return response.data
})


const initialState = {
    ...user,
    status: 'Не авторизован',
}

const userSlice = createSlice({
    name: 'users',
    initialState
    ,
    reducers: {
        unAuthorize: state => {
            localStorage.removeItem('user')
            return { status: 'Не авторизован' }
        }
    },
    extraReducers: {
        [authArtist.pending]: handlePending,
        [authArtist.fulfilled]: (state,action) => {
            const data = {...action.payload, status: "Успешно"};
            localStorage.setItem("user", JSON.stringify(data))
            return data
        },
        [authArtist.rejected]: handleError,
    }
})

export const {unAuthorize} = userSlice.actions

export default userSlice.reducer