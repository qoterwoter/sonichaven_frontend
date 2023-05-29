import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import notification from "../components/Notifications/Notification";

// export const pushNotification = createAsyncThunk('notifications/pushNotification', async (notification, {dispatch}) => {
//     setTimeout(() => {
//         // dispatch(removeNotification())
//     },2500)
//
//     console.log(notification)
//
//     return notification
// })

const initialState = {
    notifications: []
}

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        pushNotification: (state, action) => {
            const id = state.notifications.length
            const notification = action.payload
            state.notifications = [...state.notifications, {...notification, id}]
        },
        removeNotification: (state, action) => {
            const toRemove= action.payload
            state.notifications = [...state.notifications.filter(notification => notification.id !== toRemove)]
            console.log(toRemove)
        },
    },
    // extraReducers: {
    //     [pushNotification.pending]: (state, action) => {
    //         state.notifications = [...state.notifications, {...action.meta.arg, classList: 'show'}]
    //     }
    // }
})

export const {removeNotification, pushNotification} = notificationSlice.actions

export default notificationSlice.reducer