import React, {useEffect, useState} from "react";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import {useDispatch, useSelector} from "react-redux";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import {artistUpdate, fetchUserData, uploadImage, userUpdate} from "../../reducers/userSlice";
import {notificator} from "./UserEditableItem";

const UserProfileMiniItem = (props) => {
    const title = props.title
    const description = props.description

    const [isEdit, setIsEdit] = useState(false)
    const [value, setValue] = useState(props.value)
    const dispatch = useDispatch()
    const key = props.sendTo
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

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
            if (image === null) {
                toggleEdit()
                return
            } else {
                const formData = new FormData();
                formData.append('profile_image', image, image.name)
                dispatch(uploadImage(formData))
                notify("Фотография успешно обновлена!")
            }
        }
        toggleEdit()
    }

    useEffect(() => {
        dispatch(fetchUserData())
    }, [dispatch])

    return (
        <div className={`${props.className} miniItem miniItem_horizontal`}>
            <h3 className="miniItem__title information__general">{title}</h3>
            <div className="miniItem__block">
                {isEdit ?
                    <form className={'form'} onSubmit={onSubmit}>
                    {key === 'artist_bio' ? (
                        <textarea onChange={onChange} rows={6} className={'miniItem__textarea textarea'}
                           value={value}/>
                        ) : (
                        <input
                            type={'file'}
                            accept="image/jpeg,image/png,image/gif"
                            onChange={handleImageChange}
                        />)}
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