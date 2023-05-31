import React from "react";
import Notification from "./Notification";

const ChangeSaved = props => {
    const state = props.notification;

    const notification = {
        ...state,
        title: 'Изменения сохранены!',
        description: `${state.description}`,
    }

    console.log(notification)

    return <Notification notification={notification} classList={'success'}/>
}

export default ChangeSaved