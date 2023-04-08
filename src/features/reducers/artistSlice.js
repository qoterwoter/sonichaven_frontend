import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import handleError, {handlePending, handleSuccess} from "./handleResponse";

export const fetchReleases = createAsyncThunk('releases/fetchReleases', async () => {
    const response = await axios.get('http://sonichaven-backend.std-962.ist.mospolytech.ru/api/releases/');
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
        [fetchReleases.pending]: state => handlePending(state),
        [fetchReleases.fulfilled]: (state,action) => handleSuccess(state,action,'releases'),
        [fetchReleases.rejected]: (state,action) => handleError(state,action)
    }
})

export default artistReducer.reducer