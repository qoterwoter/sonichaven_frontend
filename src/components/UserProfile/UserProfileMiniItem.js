import React, {useState} from "react";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import {useDispatch} from "react-redux";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import {artistUpdate} from "../../reducers/userSlice";
import {notificator} from "./UserEditableItem";

const UserProfileMiniItem = (props) => {
    const title = props.title
    const description = props.description

    const [isEdit, setIsEdit] = useState(false)
    const [value, setValue] = useState(props.value)
    const dispatch = useDispatch()

    const key = props.sendTo

    const onChange = e => {
        setValue(e.target.value)
    }

    const toggleEdit = () => {
        setIsEdit(!isEdit)
    }

    const notify = notificator(dispatch)


    const onSubmit = e => {
        e.preventDefault()
        if(key==='artist_bio') {
            dispatch(artistUpdate({bio: value}))
            notify("Описание артиста успешно обновлено!")
        }
        if(key==='artist_image') {
            dispatch(artistUpdate({profile_image: value}))
            notify("Фотография артиста успешно обновлена!")
        }
        toggleEdit()
    }

    return (
        <div className={`${props.className} miniItem miniItem_horizontal`}>
            <h3 className="miniItem__title information__general">{title}</h3>
            <div className="miniItem__block">
                {isEdit ?
                    <form className={'form'} onSubmit={onSubmit}>
                        <textarea onChange={onChange} rows={6} className={'miniItem__textarea textarea'} value={value}/>
                        <CheckRoundedIcon className={'miniItem__edit icon actions__edit'} onClick={onSubmit}/>
                    </form> :
                    description
                }
            </div>
            {!isEdit && <EditRoundedIcon className={'miniItem__edit icon actions__edit icon_edit'} onClick={toggleEdit}/>}
        </div>
    )
}

export default UserProfileMiniItem