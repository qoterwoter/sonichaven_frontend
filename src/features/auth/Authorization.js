import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {authArtist} from "../reducers/userSlice";

const Authorization = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const onChangeUsername = e => setUsername(e.target.value)
    const onChangePassword = e => setPassword(e.target.value)

    const dispatch = useDispatch()
    const userData = useSelector(state=>state.user)

    const login = e => {
        e.preventDefault()

        dispatch(authArtist({username, password}))
    }

    return (
        <>
        <form onSubmit={login}>
            <label htmlFor='login'>Введите логин</label>
            <input
                id='login'
                type='text'
                placeholder='Логин'
                onChange={onChangeUsername}
                value={username}
            />

            <label htmlFor='password'>Введите пароль</label>
            <input
                id='password'
                type='password'
                placeholder='Пароль'
                onChange={onChangePassword}
                value={password}
            />
            <input
                type='submit'
            />
        </form>
        <p>Статус: {userData.status}</p>
        </>
    )
}

export default Authorization