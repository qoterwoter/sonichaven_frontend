import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {handlePending, handleSuccess, handleError} from "./handleResponse";


export const fetchNews = createAsyncThunk('news/fetchNews', async  () => {
  const response = await axios.get('http://sonichaven-backend.std-962.ist.mospolytech.ru/api/news/');
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