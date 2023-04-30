import React from "react";

const UserProfileMiniItem = (props) => {
    const title = props.title
    const classList = props.classList
    const description = props.description

    return (
        <div className={`${classList}__miniItem miniItem`}>
            <h3 className="miniItem__title information__general">{title}</h3>
            <div className="miniItem__block">{description}</div>
        </div>
    )
}

export default UserProfileMiniItem