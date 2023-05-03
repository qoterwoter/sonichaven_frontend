import React, {useState} from 'react';
import Separator from "../Separator";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import {useDispatch} from "react-redux";

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
        dispatch()
        toggleEdit()
    }

    return (
        <li className={'songsList__song'}>
            <div className="song__body">
                {isEdit ?
                <>
                    <label htmlFor="title" className="song__title">Название</label>
                    <input id={'title'} type="text" className="song__title_input" value={title} onChange={onChangeTitle}/>
                    <label htmlFor={'duration'} className="song__duration">Длительность</label>
                    <input id={'duration'} type="text" className="song__duration_input" value={duration} onChange={onChangeDuration}/>
                </> :
                <>
                    <p className={'song__title'}>Название <Separator/> {title}</p>
                    <p className="song__duration">Длительность <Separator/> {duration}</p>
                </>
                }
            </div>
            <div className="song__actions">
                {!isEdit && <EditRoundedIcon onClick={toggleEdit} className={'icon icon_edit'}/>}
                {isEdit && <CheckRoundedIcon onClick={toggleEdit} className={'icon icon_save'}/>}
            </div>
        </li>
    )
}

export default SongEditable;