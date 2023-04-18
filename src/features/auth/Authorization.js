import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {authArtist} from "../reducers/userSlice";
import {useNavigate} from "react-router-dom";

const Authorization = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const navigate = useNavigate()

    const onChangeUsername = e => setUsername(e.target.value)
    const onChangePassword = e => setPassword(e.target.value)

    const dispatch = useDispatch()
    const userData = useSelector(state=>state.user)

    const login = e => {
        e.preventDefault()

        dispatch(authArtist({username, password}))
        // navigate('/')
    }

    return (
        <>
        <form className='form' onSubmit={login}>
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
            />
            <p>Статус: {userData.status}</p>
        </form>
        </>
    )
}

export default Authorization