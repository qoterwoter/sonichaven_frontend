import React from "react";
import Notification from "./Notification";

const AuthError = (props) => {
    const state = props.notification

    const notification = {
        ...state,
        description: state.description,
        title: 'Ошибка!',
    }

    return <Notification
        classList={'error'}
        notification={notification}
    />
}

export default AuthError

