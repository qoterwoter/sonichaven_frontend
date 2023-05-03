import React, {useState} from "react";
import Separator from "../Separator";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import {useDispatch} from "react-redux";
import {artistUpdate, userUpdate} from "../../reducers/userSlice";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

const UserEditableItem = (props) => {
    const [value, setValue] = useState(props.value)
    const [isEdit, setIsEdit] = useState(false)
    const dispatch = useDispatch()

    const placeholder = props.placeholder
    const type = props.type
    const key = props.sendTo

    const onChange = e => {
        setValue(e.target.value)
    }

    const toggleEdit = () => {
        setIsEdit(!isEdit)
    }

    const onSubmit = e => {
        e.preventDefault()
        if(key==='artist_name') {
            dispatch(artistUpdate({name: value}, {dispatch}))
        }
        if(key==='user_name') {
            const name = value.split(' ')

            const data = {
                first_name: name[0],
                last_name: name[1]
            }
            dispatch(userUpdate(data))
        }
        if (key==='user_email') {
            dispatch(userUpdate({email: value}))
        }
        toggleEdit()
    }

    return(
        <>
        {isEdit ?
            <form className={'userData__form form'} onSubmit={onSubmit}>
                <div>
                    <label className={'userData__label information__general'}>{placeholder}</label>
                    <Separator/>
                    <input className={'userData__input input'} type={type} value={value} onChange={onChange} placeholder={placeholder}/>
                </div>
                <CheckRoundedIcon className={'icon icon_save actions__edit '} onClick={onSubmit}/>
            </form> :
            <div className={'userData__editableItem editableItem'}>
                <p className={`editableItem__title information__general`}>
                    {placeholder}
                    <Separator/>
                    {value}
                </p>
                <EditRoundedIcon className={'icon actions__edit icon_edit'} onClick={toggleEdit}/>
            </div>
        }
        </>
    )
}

export default UserEditableItem