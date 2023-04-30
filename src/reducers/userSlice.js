import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import handleError, {handlePending} from "./handleResponse";

const API_URL = 'http://sonichaven-backend.std-962.ist.mospolytech.ru/api/'
const user = JSON.parse(localStorage.getItem('user')) || {}
const headers = {'Authorization': `Token ${user.token}`}
const artist = user.artist

export const authArtist = createAsyncThunk('user/authUser', async ({username, password}) => {
    console.log(username, password)
    const response = await axios.post(
        API_URL + 'login/',
        {
            username, password
        }
    )

    return response.data
})

export const userUpdate = createAsyncThunk('user/updateUser', async  (data) => {
    console.log(artist)
    return await axios.put(`${API_URL}artists/${artist.id}/`, {
        ...artist, ...data
    }, {headers})
})


const initialState = {
    status: 'Не авторизован',
    ...user,
}

const userSlice = createSlice({
    name: 'user',
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