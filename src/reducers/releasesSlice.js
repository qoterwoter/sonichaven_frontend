import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import handleError, {handlePending, handleSuccess} from "./handleResponse";
import {API_URL, user, headers} from "./ordersSlice";


export const fetchReleases = createAsyncThunk('releases/fetchReleases', async () => {
    const response = await axios.get(`${API_URL}/releases/`);
    return response.data;
});

export const fetchReleasesByArtist = createAsyncThunk('releases/fetchReleasesByArtist', async () => {
    const response = await axios.get(`${API_URL}/release/${user.artist.id}/`, {headers})
    return response.data
})

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
        [fetchReleasesByArtist.fulfilled]: (state, action) => handleSuccess(state,action,'releases'),
    }
})

export default releasesSlice.reducer