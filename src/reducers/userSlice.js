import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import handleError, {handlePending, handleSuccess} from "./handleResponse";
import {API_URL, user, headers} from "./ordersSlice";

const artist = user.artist

export const authUser = createAsyncThunk('user/authUser', async ({username, password}) => {
    try {
        const response = await axios.post(
            API_URL + '/login/',{username, password}
        )
        return response.data
    } catch (e) {
        return Promise.reject(e)
    }
})

export const registerUser = createAsyncThunk('user/registerUser', async ({firstName, lastName, username, password, email}) => {
    try {
        const response = await axios.post(
            API_URL + '/register/',{first_name: firstName, last_name: lastName, username, password, email, is_artist: 'True'}
        )
        return response.data
    } catch (e) {
        return Promise.reject(e)
    }
})

export const fetchUserData = createAsyncThunk('user/fetchUserData', async () => {
    const response = await axios.get(`${API_URL}/users/${user.id}/`, {headers})
    return response.data
})

export const artistUpdate = createAsyncThunk('user/artistUpdate', async  (data, {dispatch}) => {
    const response = await axios.put(`${API_URL}/artists/${artist.id}/`, {
        ...data
    }, {headers})
    return response.data
})

export const userUpdate = createAsyncThunk('user/userUpdate', async (data) => {
    const response = await axios.put(`${API_URL}/users/${user.id}/`, {
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
        [authUser.pending]: handlePending,
        [authUser.fulfilled]: (state, action) => {
            const data = {...action.payload, status: "Успешно"};
            localStorage.setItem("user", JSON.stringify(data))
            return data
        },
        [authUser.rejected]: (state, action) => {
            console.log(action)
            state.status = 'Ошибка'
            state.errorCode = action.error.message
        },
        [registerUser.fulfilled]: (state, action) => {
            const data = {...action.payload, status: "Успешно"};
            localStorage.setItem("user", JSON.stringify(data))
            return data
        },
        [registerUser.rejected]: (state, action) => {
            console.log(action)
        },
        [artistUpdate.fulfilled]: (state, action) => {
            const data = {...user, artist: {...action.payload}}
            localStorage.setItem("user", JSON.stringify(data))
            state.user = data
        },
        [fetchUserData.fulfilled]: (state, action) => {
            const data = {...user, ...action.payload}
            localStorage.setItem("user", JSON.stringify(data))
            state.user = data
        },
        [userUpdate.fulfilled]: (state, action) => {
            const data = {...user, ...action.payload}
            localStorage.setItem("user", JSON.stringify(data))
            state.user = data
        },
        [fetchReleasesByArtist.fulfilled]: (state, action) => {
            const data = {...user, releases: [...action.payload]}
            localStorage.setItem("user", JSON.stringify(data))
            return data
        },
    }
})

export const {unAuthorize} = userSlice.actions

export default userSlice.reducer