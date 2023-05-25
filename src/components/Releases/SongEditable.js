import React, {useState} from 'react';
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import {useDispatch} from "react-redux";
import {updateSong} from "../../reducers/releasesSlice";
import {beautyCount} from "../UserProfile/UserProfileMiniItemAside";
import {fetchReleasesByArtist} from "../../reducers/userSlice";
import {useLocation} from "react-router-dom";

function SongEditable(props) {
    const song = props?.song

    const dispatch = useDispatch()
    const location = useLocation()

    const isMyRelease = !!location.pathname.startsWith('/myReleases')

    const [isEdit, setIsEdit] = useState(false)
    const [title, setTitle] = useState(song.title)
    const [duration, setDuration] = useState(song.duration)

    const toggleEdit = () => setIsEdit(!isEdit)

    const onChangeTitle = (e) => setTitle(e.target.value)
    const onChangeDuration = (e) => setDuration(e.target.value)

    const onSave = () => {
        dispatch(updateSong({...song, title, duration}))
        dispatch(fetchReleasesByArtist())                   // Нужно чтобы обновить Количество прослушиваний
        toggleEdit()
    }

    return (
        <li className={'songsList__song song'}>
            {isEdit ?
            <>
                <label className={'song__title'}>{props.songId}.</label>
                <form className="song__body_editable" onSubmit={onSave} >
                    <input id={'title'} type="text" className="song__title_input input" value={title} onChange={onChangeTitle}/>
                </form>
                <form className="song__body_editable" onSubmit={onSave}>
                    <input id={'duration'} type="text" className="song__duration_input input" value={duration} onChange={onChangeDuration}/>
                </form>
                <p className="song__listens">{beautyCount(song.playcounts)}</p>
            </> :
            <>
                <p className="song__number">{props.songId}.</p>
                <p className='song__title'>{title}</p>
                <p className="song__duration">{duration}</p>
                <p className="song__listens">{beautyCount(song.playcounts)}</p>
            </>
            }
            {isMyRelease && <div className="song__actions">
                {!isEdit && <EditRoundedIcon onClick={toggleEdit} className={'icon icon_edit'}/>}
                {isEdit && <CheckRoundedIcon onClick={onSave} className={'icon icon_save'}/>}
            </div>}
        </li>
    )
}

export default SongEditable;