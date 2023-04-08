import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import handleError, {handlePending, handleSuccess} from "./handleResponse";

const API_URL = 'http://sonichaven-backend.std-962.ist.mospolytech.ru/api/'

export const fetchArtistInfo = createAsyncThunk('artist/fetchArtistInfo', async () => {
    const response = await axios.get({
        method:'POST',
        url:API_URL + 'artist-info/',
        headers: {
            'Authorization': localStorage.getItem('accessToken')
        }
    })

    return response.data
})
