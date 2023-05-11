import React, {useState} from 'react';
import Separator from "../Separator";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import {useDispatch} from "react-redux";
import {updateSong} from "../../reducers/releasesSlice";
import {beautyCount} from "../UserProfile/UserProfileMiniItemAside";

function SongEditable(props) {
    const song = props?.song

    const dispatch = useDispatch()

    const [isEdit, setIsEdit] = useState(false)
    const [title, setTitle] = useState(song.title)
    const [duration, setDuration] = useState(song.duration)

    const toggleEdit = () => setIsEdit(!isEdit)

    const onChangeTitle = (e) => setTitle(e.target.value)
    const onChangeDuration = (e) => setDuration(e.target.value)

    const onSave = () => {
        dispatch(updateSong({...song, title, duration}))
        toggleEdit()
    }

    return (
        <li className={'songsList__song song'}>
            {isEdit ?
            <>
                <div className="song__body_editable">
                    <input id={'title'} type="text" className="song__title_input input" value={title} onChange={onChangeTitle}/>
                </div>
                <div className="song__body_editable">
                    <input id={'duration'} type="text" className="song__duration_input input" value={duration} onChange={onChangeDuration}/>
                </div>
                <p className="song__listens">{beautyCount(song.playcounts)}</p>
            </> :
            <>
                <p className='song__title'>{props.songId}. {title}</p>
                <p className="song__duration">{duration}</p>
                <p className="song__listens">{beautyCount(song.playcounts)}</p>
            </>
            }
            <div className="song__actions">
                {!isEdit && <EditRoundedIcon onClick={toggleEdit} className={'icon icon_edit'}/>}
                {isEdit && <CheckRoundedIcon onClick={onSave} className={'icon icon_save'}/>}
            </div>
        </li>
    )
}

export default SongEditable;