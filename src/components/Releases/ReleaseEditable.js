import React, {useState} from 'react';
import {getReleaseType} from "../UserProfile/UserProfileMiniItemAside";
import Separator from "../Separator";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import SongEditable from "./SongEditable";

const ReleaseEditable = (props) => {
    const release = props.release

    const songsList = release.songs && release.songs.map(song => <SongEditable song={song}/>)

    return (
        <article className="userReleases__release release">
            <div className="release__header">
                <h3 className="release__title">Название <Separator/>{release.title}</h3>
                <p className="release__type">Тип релиза <Separator/> {getReleaseType(release.type)}</p>
            </div>
            <div className="release__body body">
                <h3 className="body__title">Список песен</h3>
                <ul className="body__songsList">
                    {songsList}
                </ul>
            </div>
        </article>
    );
}

export default ReleaseEditable;