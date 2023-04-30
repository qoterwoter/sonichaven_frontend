import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const pushNotification = createAsyncThunk('notifications/pushNotification', async (notification, {dispatch}) => {
    setTimeout(() => {
        dispatch(removeNotification())
    },3000)

    return notification
})

const initialState = {
    notifications: []
}

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        removeNotification: state => {
            state.notifications = state.notifications.slice(1)
        },
    },
    extraReducers: {
        [pushNotification.pending]: (state, action) => {
            state.notifications = [...state.notifications, {...action.meta.arg, classList: 'show'}]
        }
    }
})

export const {removeNotification, hideNotification} = notificationSlice.actions

export default notificationSlice.reducer