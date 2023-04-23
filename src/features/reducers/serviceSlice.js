import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {handlePending, handleSuccess, handleError} from "./handleResponse";

export const fetchServices = createAsyncThunk('services/fetchServices', async () => {
    const response = await axios.get('http://sonichaven-backend.std-962.ist.mospolytech.ru/api/services/')
    return response.data
})

const serviceReducer = createSlice({
    name: 'services',
    initialState: {
        services: [],
        status: ''
    },
    extraReducers: {
        [fetchServices.pending]: handlePending,
        [fetchServices.fulfilled]: (state, action) => handleSuccess(state,action,'services'),
        [fetchServices.rejected]: handleError,
    },
})

export default serviceReducer.reducer