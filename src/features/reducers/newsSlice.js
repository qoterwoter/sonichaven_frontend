import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import handleErrors from "./handleErrors";


export const fetchNews = createAsyncThunk('news/fetchNews', async  () => {
  const response = await axios.get('http://sonichaven-backend.std-962.ist.mospolytech.ru/api/news/');
  console.log(response)
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
    [fetchNews.pending]: state => state.status = 'Загрузка новостей...',
    [fetchNews.fulfilled]: (state, action) => {
      state.status = 'Успешно'
      state.news = action.payload
    },
    [fetchNews.rejected]: (state,action) => handleErrors(state,action)
  }
})