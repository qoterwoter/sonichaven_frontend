import React, {useState} from 'react';
import {getReleaseType} from "../UserProfile/UserProfileMiniItemAside";
import Separator from "../Separator";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import SongEditable from "./SongEditable";

export const sumDuration = (songs) => {
    let totalSeconds = 0;
    songs.forEach(track => {
        const [hours, minutes, seconds] = track.duration.split(':').map(Number);
        totalSeconds += hours * 3600 + minutes * 60 + seconds;
    });
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

const ReleaseEditable = (props) => {
    const release = props.release

    const [title, setTitle] = useState(release.title)
    const [isEdit, setIsEdit] = useState(false)

    const songsList = release.songs && release.songs.map(song => <SongEditable song={song}/>)

    const onSubmit = e => {
        e.preventDefault()
        toggleEdit()
    }

    const onChange = e => setTitle(e.target.value)
    const toggleEdit = () => setIsEdit(!isEdit)

    return (
        <article className="userReleases__release release">
            <div className="release__header">
                {isEdit ?
                    <form className={'release__title'} onSubmit={onSubmit}>
                        <label className={'title__label'}><h3 className={'title'}>Название <Separator/></h3></label>
                        <input className={'title__input input'} value={title} onChange={onChange}/>
                        <CheckRoundedIcon className={'icon icon_save'} onClick={onSubmit}/>
                    </form> :
                    <div className="release__title">
                        <h3 className="title">Название <Separator/>{title}</h3>
                        <EditRoundedIcon className={'icon icon_edit'} onClick={toggleEdit}/>
                    </div>
                }
                <p className="release__type">Тип релиза <Separator/> {getReleaseType(release.type)}</p>
                <img className="release__image" src={release.image} alt={'Релиз'}/>
            </div>
            <div className="release__body body">
                <h3 className="body__title">
                    Список песен <Separator/>
                    {release.songs && release.songs.length} треков
                </h3>
                <p className={'body__duration'}>Длительность релиза <Separator/> {sumDuration(release.songs)}</p>
                <ul className="body__songsList songList">
                    {songsList}
                </ul>
            </div>
        </article>
    );
}

export default ReleaseEditable;