import React from "react";

const UserProfileItem = (props) => {
    const title = props.title;
    const description = props.description;
    const itemClassList = props.classList

    const link = props?.link

    return (
        <article className={"userProfile__item " + itemClassList}>
            <div className="item__title">
                <h3 className="title">{title}</h3>
                {link}
            </div>
            <div className="item__information">
                {description}
            </div>
        </article>
    )
}

export default UserProfileItem
