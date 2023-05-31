import React from "react";
import Separator from "../Separator";
import {beautyNum} from "../../routes/ShopCart/ShopCart";

export const getReleaseType = (type) => {
    if(type === 'album') return "Альбом"
    if(type === 'mixtape') return "Микстейп"
    if(type === 'ep') return "Сингл"
    if(type === 'single') return "Епи"
}

export const getReleaseDate = date => {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC"
    };

    return new Date(date).toLocaleDateString('ru',options)
}

export const beautyCount = num => {
    return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const UserProfileMiniItemAside = (props) => {
    const release = props.release
    const classList = props.classList
    const description = props.description
    const asideTitle = props.asideTitle

    const aside = release.songs && release.songs.map((song, id) => {
        return <div className={'aside__item item'} key={`song${id}`}>
            <p className="item__description information__general">{song.track_number}. {song.title}</p>
            <p className="item__description information__secondary">{song.duration.slice(3)}</p>
        </div>
    })

    return (
        <div className={`${classList}__miniItem miniItem`}>
            <div className="miniItem__main">
                <h3 className="miniItem__title information__general">{release.title}</h3>
                <div className="miniItem__block">{description}</div>
                <p className="miniItem__secondary information__secondary">{getReleaseType(release.type)}  <Separator/> {getReleaseDate(release.release_date)}</p>
                <p className="miniItem__secondary information__secondary">{beautyCount(release.listens)} Стримов</p>
            </div>
            <div className="miniItem__aside">
                <h3 className="miniItem__title information__general">{asideTitle}</h3>
                {aside}
            </div>
        </div>
    )
}

export default UserProfileMiniItemAside