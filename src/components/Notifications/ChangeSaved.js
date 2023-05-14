import React from "react";
import Notification from "./Notification";

const ChangeSaved = props => {
    const state = props.notification;

    const notification = {
        title: 'Изменения сохранены!',
        description: `${state.description}`,
    }

    return <Notification notification={notification} classList={'success'}/>
}

export default ChangeSaved