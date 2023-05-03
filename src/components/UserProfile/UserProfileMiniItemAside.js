import React from "react";
import Separator from "../Separator";

export const getReleaseType = (type) => {
    if(type === 'album') return "Альбом"
    if(type === 'mixtape') return "Микстейп"
    if(type === 'ep') return "Сингл"
    if(type === 'single') return "Епи"
}

const UserProfileMiniItemAside = (props) => {
    const release = props.release
    const classList = props.classList
    const description = props.description
    const asideTitle = props.asideTitle

    const aside = release.songs && release.songs.map(song => {
        return <div className={'aside__item item'}>
            <p className="item__description information__general">{song.track_number}. {song.title}</p>
            <p className="item__description information__secondary">{song.duration.slice(3)}</p>
        </div>
    })

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC"
    };

    const date = new Date(release.release_date).toLocaleDateString('ru',options)


    return (
        <div className={`${classList}__miniItem miniItem`}>
            <div className="miniItem__main">
                <h3 className="miniItem__title information__general">{release.title}</h3>
                <div className="miniItem__block">{description}</div>
                <p className="miniItem__secondary information__secondary">Тип релиза <Separator/> {getReleaseType(release.type)}</p>
                <p className="miniItem__secondary information__secondary">Вышел <Separator/> {date}</p>
            </div>
            <div className="miniItem__aside">
                <h3 className="miniItem__title information__general">{asideTitle}</h3>
                {aside}
            </div>
        </div>
    )
}

export default UserProfileMiniItemAside