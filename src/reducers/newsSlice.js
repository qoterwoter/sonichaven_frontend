import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {handlePending, handleSuccess, handleError} from "./handleResponse";
import {API_URL} from "./ordersSlice";


export const fetchNews = createAsyncThunk('news/fetchNews', async  (page) => {
    const response = await axios.get(`${API_URL}/news/?page=${page}`)
    return response.data
})

export const fetchCurrentNews = createAsyncThunk('news/fetchCurrentNews', async id => {
    const response = await axios.get(`${API_URL}/news_detail/${id}/`)
    return response.data
})

const newsReducer = createSlice({
    name:'news',
    initialState: {
        news: [],
        status: '',
    },
    reducers: {},
    extraReducers: {
        [fetchNews.pending]: handlePending,
        [fetchNews.fulfilled]: (state, action) => handleSuccess(state,action,'news'),
        [fetchNews.rejected]: handleError,
        [fetchCurrentNews.fulfilled]: (state, action) => {
            state.news = action.payload
            state.status = 'успешно'
        }
    }
})

export default newsReducer.reducer