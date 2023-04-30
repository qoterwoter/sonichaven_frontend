import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {handlePending, handleSuccess, handleError} from "./handleResponse";
import {API_URL} from "./ordersSlice";


export const fetchNews = createAsyncThunk('news/fetchNews', async  () => {
    const response = await axios.get(`${API_URL}/news/`)
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
        [fetchNews.rejected]: handleError
    }
})

export default newsReducer.reducer