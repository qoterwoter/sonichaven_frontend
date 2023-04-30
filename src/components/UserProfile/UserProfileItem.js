import React from "react";

const UserProfileItem = (props) => {
    const title = props.title;
    const description = props.description;
    const itemClassList = props.classList

    return (
        <article className={"userProfile__item " + itemClassList}>
            <h3 className="item__title">{title}</h3>
            <div className="item__information">
                {description}
            </div>
        </article>
    )
}

export default UserProfileItem
