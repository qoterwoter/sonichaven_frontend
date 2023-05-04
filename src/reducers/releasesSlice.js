import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import handleError, {handlePending, handleSuccess} from "./handleResponse";
import {API_URL, user, headers} from "./ordersSlice";


export const fetchReleases = createAsyncThunk('releases/fetchReleases', async () => {
    const response = await axios.get(`${API_URL}/releases/`);
    return response.data;
});

export const updateSong = createAsyncThunk('releases/updateSong', async ({song}) => {
    const response = await axios.put(`${API_URL}/song/${song.id}`, {
        ...song
    }, {headers})
    return response.data
})

export const updateRelease = createAsyncThunk('releases/updateRelease', async (release) => {
    const response = await axios.put(`${API_URL}/releases/${release.id}/`, {
        ...release
    }, {headers})

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
        [updateRelease.fulfilled]: (state, action) => {
            const release = action.payload
            const userReleases = user.releases.filter(userRelease=> userRelease.id !== release.id)
            const data = {...user, releases: [...userReleases, release]}
            localStorage.setItem("user", JSON.stringify(data))

        }
    }
})

export default releasesSlice.reducer