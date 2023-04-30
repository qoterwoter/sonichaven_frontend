import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import handleError, {handlePending, handleSuccess} from "./handleResponse";

export const fetchReleases = createAsyncThunk('Releases/fetchReleases', async () => {
    const response = await axios.get('http://sonichaven-backend.std-962.ist.mospolytech.ru/api/releases/');
    return response.data;
});


const releasesSlice = createSlice({
    name: 'releases',
    initialState: {
        releases: [],
        status: '',
    },
    reducers: {},
    extraReducers: {
        [fetchReleases.pending]: handlePending,
        [fetchReleases.fulfilled]: (state,action) => handleSuccess(state,action,'releases'),
        [fetchReleases.rejected]: handleError,
    }
})

export default releasesSlice.reducer