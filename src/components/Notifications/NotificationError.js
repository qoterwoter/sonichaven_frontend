import React from "react";
import Notification from "./Notification";

const NotificationError = (props) => {

    const state = props.notification

    console.log(props)

    const notification = {
        description: state.description,
        title: 'Ошибка: ' + state?.title,
    }

    return <Notification
        classList={'error'}
        notification={notification}
    />
}

export default NotificationError

