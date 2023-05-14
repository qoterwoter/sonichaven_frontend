import React, {useState} from 'react';
import {beautyCount, getReleaseDate, getReleaseType} from "../UserProfile/UserProfileMiniItemAside";
import Separator from "../Separator";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import SongEditable from "./SongEditable";
import {useDispatch} from "react-redux";
import {updateRelease} from "../../reducers/releasesSlice";

export const sumDuration = (songs) => {
    let totalSeconds = 0;
    songs.forEach(track => {
        const [hours, minutes, seconds] = track.duration.split(':').map(Number);
        totalSeconds += hours * 3600 + minutes * 60 + seconds;
    });
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const sumHours = hours > 0 ? `${hours} ч.` : ''
    const sumMinutes = minutes > 0 ? `${minutes} мин. ` : ''
    const sumSeconds = seconds > 0 ? `${seconds} сек. ` : ''

    return sumHours + sumMinutes + sumSeconds
}


const ReleaseEditable = (props) => {
    const release = props?.release

    const dispatch = useDispatch()

    const [title, setTitle] = useState(release.title)
    const [isTitleEdit, setIsTitleEdit] = useState(false)
    const [isTypeEdit, setIsTypeEdit] = useState(false)

    const songsList = release.songs && release.songs.map((song, id) => <SongEditable song={song} songId={id+1} key={`song${id}`}/>)

    const submitTitle = e => {
        e.preventDefault()
        dispatch(updateRelease({...release, title}))
        toggleIsTitleEdit()
    }

    const onChange = e => setTitle(e.target.value)
    const toggleIsTitleEdit = () => setIsTitleEdit(!isTitleEdit)

    return (
        <article className="userReleases__release release">
            <div className="release__header">
                {isTitleEdit ?
                    <form className={'release__title'} onSubmit={submitTitle}>
                        <label className={'title__label'}><h3 className={'title'}>Название <Separator/></h3></label>
                        <input className={'title__input input'} value={title} onChange={onChange}/>
                        <CheckRoundedIcon className={'icon icon_save'} onClick={submitTitle}/>
                    </form> :
                    <div className="release__title">
                        <h3 className="title">Название <Separator/>{title}</h3>
                        <EditRoundedIcon className={'icon icon_edit'} onClick={toggleIsTitleEdit}/>
                    </div>
                }
                <img className="release__image" src={release.image} alt={'Релиз'}/>
                <p className="release__about">{getReleaseType(release.type)} <Separator/> {(new Date(release.release_date)).getUTCFullYear()} <Separator/> {sumDuration(release.songs)}</p>
                <p className="release__about">{beautyCount(release.listens)} Прослушиваний</p>
            </div>
            <div className="release__body body">
                <h3 className="body__title">
                    Список песен <Separator/>
                    {release.songs && release.songs.length} треков
                </h3>
                <ul className="body__songsList songList">
                    <li className='songList__title'>Название</li>
                    <li className='songList__duration'>Длительность</li>
                    <li className="songList__listens">Прослушивания</li>
                    {songsList}
                </ul>
            </div>
        </article>
    );
}

export default ReleaseEditable;