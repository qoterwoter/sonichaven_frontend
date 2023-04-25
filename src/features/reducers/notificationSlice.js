import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const pushNotification = createAsyncThunk('notifications/pushNotification', async (notification, {dispatch}) => {
    setTimeout(() => {
        dispatch(hideNotification(notification.id))
        setTimeout(() => {
            dispatch(removeNotification())
        }, 1000)
    },2000)

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
        hideNotification: (state, action) => {
            const toHide = action.payload
            const id = state.notifications.findIndex(notification => notification.id === toHide)

            if(id > -1) state.notifications[id].classList = 'hide'
        }
    },
    extraReducers: {
        [pushNotification.pending]: (state, action) => {
            state.notifications = [...state.notifications, {...action.meta.arg, classList: 'show'}]
        }
    }
})

export const {removeNotification, hideNotification} = notificationSlice.actions

export default notificationSlice.reducer