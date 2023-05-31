import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import handleError, {handlePending, handleSuccess} from "./handleResponse";
import {API_URL, user, headers} from "./ordersSlice";


export const fetchReleases = createAsyncThunk('releases/fetchReleases', async (id) => {
    const response = await axios.get(`${API_URL}/releases/${id ? id : ''}`);
    return response.data;
});

export const updateRelease = createAsyncThunk('releases/updateRelease', async (release) => {
    const response = await axios.put(`${API_URL}/releases/${release.id}/`, {
        ...release
    }, {headers})

    console.log(response)
    return response.data
})

export const updateSong = createAsyncThunk('releases/updateSong', async (song) => {
    const response = await axios.put(`${API_URL}/song/${song.id}/`, {
        ...song
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
            const data = action.payload
            const releaseToUpdate = user.releases.find(release => release.id === data.id)
            const output = user.releases.map(release => {
                if(release.id === data.id) {
                    return {...releaseToUpdate, ...data}
                } else return release
            })
            localStorage.setItem("user", JSON.stringify({...user, releases: output}))

        },
        [updateSong.fulfilled]: (state, action) => {
            const song = action.payload
            const releases = user.releases.map(
                release => {
                    const songs = release.songs.map(song_ => {
                        if (song_.id === song.id) return song
                        else return song_
                    })
                    return {...release, songs}
                }
            )
            localStorage.setItem("user", JSON.stringify({...user, releases}))
        }
    }
})

export default releasesSlice.reducer