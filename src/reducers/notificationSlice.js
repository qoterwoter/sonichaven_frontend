import {createSlice} from "@reduxjs/toolkit";

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
        },
    }
})

export const {removeNotification, pushNotification} = notificationSlice.actions

export default notificationSlice.reducer