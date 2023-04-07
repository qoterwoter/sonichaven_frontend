import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import handleErrors from "./handleErrors";

export const fetchReleases = createAsyncThunk('releases/fetchReleases', async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/releases/');
  console.log(response)
  return response.data;
});

const artistReducer = createSlice({
  name: 'artist',
  initialState: {
    releases: [],
    userInfo: {
      artist_name:'Imagine Dragons'
    },
    status: '',
  },
  reducers: {},
  extraReducers: {
    [fetchReleases.pending]: state => {
      state.status = 'Загрузка данных...'
    },
    [fetchReleases.fulfilled]: (state,action) => {
      state.status = 'Успешно'
      state.releases = action.payload
    },
    [fetchReleases.rejected]: (state,action) => handleErrors(state,action)
  }
})

export default artistReducer.reducer