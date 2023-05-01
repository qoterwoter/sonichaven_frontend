import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {handlePending, handleSuccess, handleError} from "./handleResponse";
import {API_URL} from "./ordersSlice";

export const fetchServices = createAsyncThunk('Catalog/fetchServices', async () => {
    const response = await axios.get(`${API_URL}/services/`)
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