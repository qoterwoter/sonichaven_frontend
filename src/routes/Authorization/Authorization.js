import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {authUser} from "../../reducers/userSlice";
import {useNavigate} from "react-router-dom";
import {pushNotification} from "../../reducers/notificationSlice";
import notification from "../../components/Notifications/Notification";

const Authorization = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const navigate = useNavigate()

    const onChangeUsername = e => setUsername(e.target.value)
    const onChangePassword = e => setPassword(e.target.value)

    const dispatch = useDispatch()
    const userData = useSelector(state=>state.user)

    useEffect(() => {
        if(userData && userData.status === 'Успешно') {
            navigate('/userProfile')
        }
        if(userData && userData.status === 'Ошибка') {
            dispatch(pushNotification({title:"Неверные данные для входа", description: userData?.errorCode,notificationType: 'error'}))
        }
    })

    const login = (e) => {
        e.preventDefault()

        dispatch(authUser({username, password}))
    }

    return (
        <main className='main'>
        <form className='authForm form' onSubmit={login}>
            <label className='form__label' htmlFor='login'>Введите логин:</label>
            <input
                className='form__input'
                id='login'
                type='text'
                placeholder='Логин'
                onChange={onChangeUsername}
                value={username}
            />
            <label className='form__label' htmlFor='password'>Введите пароль:</label>
            <input
                className='form__input'
                id='password'
                type='password'
                placeholder='Пароль'
                onChange={onChangePassword}
                value={password}
            />
            <input
                className='form__input_submit form__input'
                type='submit'
                onClick={login}
            />
            {/*<p>Статус: {userData.status}</p>*/}
        </form>
        </main>
    )
}

export default Authorization