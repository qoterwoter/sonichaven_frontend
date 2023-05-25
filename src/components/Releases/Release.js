import React from 'react';
import Separator from "../Separator";
import {NavLink} from "react-router-dom";
import {beautyCount, getReleaseType} from "../UserProfile/UserProfileMiniItemAside";
import {sumDuration} from "./ReleaseEditable";

function Release(props) {
    const release = props.release

    const date = new Date(release.release_date)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <article className='releases__release release'>
            <div className="release__header">
                <h3 className='release__title'>{release.title}</h3> {/* <br/>*/}
                <NavLink to={`/myReleases/${release.id}`}>Открыть</NavLink>
            </div>
            <img className='release__image' src={release.image} alt='img'/>
            <p className="release__about">{getReleaseType(release.type)} <Separator/> {(new Date(release.release_date)).getUTCFullYear()} <Separator/> {sumDuration(release.songs)}</p>
            <p className="release__about">{beautyCount(release.listens)} Прослушиваний</p>
            <p className='release__date'>Выпущен <Separator/> {date.toLocaleDateString('RU-ru', options)}</p>
        </article>
    );
}

export default Release;