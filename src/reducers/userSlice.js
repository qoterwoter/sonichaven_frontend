import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import handleError, {handlePending, handleSuccess} from "./handleResponse";

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

export const fetchUserData = createAsyncThunk('user/fetchUserData', async () => {
    const response = await axios.get(`${API_URL}users/${user.id}/`, {headers})
    return response.data
})

export const artistUpdate = createAsyncThunk('user/artistUpdate', async  (data, {dispatch}) => {
    const response = await axios.put(`${API_URL}artists/${artist.id}/`, {
        ...artist, ...data
    }, {headers})
    return response.data
})

export const userUpdate = createAsyncThunk('user/userUpdate', async (data) => {
    const response = await axios.put(`${API_URL}users/${user.id}/`, {
        ...user, ...data
    }, {headers})
    return response.data
})

export const fetchReleasesByArtist = createAsyncThunk('releases/fetchReleasesByArtist', async () => {
    const response = await axios.get(`${API_URL}/release/${user.artist.id}/`, {headers})
    return response.data
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
        [authArtist.rejected]: (state, action) => {
            console.log(action)
            state.status = 'Ошибка'
            state.errorCode = action.error.message
        },
        [artistUpdate.fulfilled]: (state, action) => {
            const data = {...user, artist: {...action.payload}}
            localStorage.setItem("user", JSON.stringify(data))
            return data
        },
        [fetchUserData.fulfilled]: (state, action) => {
            const data = {...user, ...action.payload}
            localStorage.setItem("user", JSON.stringify(data))
            return data
        },
        [userUpdate.fulfilled]: (state, action) => {
            const data = {...user, ...action.payload}
            localStorage.setItem("user", JSON.stringify(data))
            return data
        },
        [fetchReleasesByArtist.fulfilled]: (state, action) => handleSuccess(state,action,'releases'),
    }
})

export const {unAuthorize} = userSlice.actions

export default userSlice.reducer