import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {authUser, fetchUserData} from "../../reducers/userSlice";
import {NavLink, useNavigate} from "react-router-dom";
import {pushNotification} from "../../reducers/notificationSlice";

const Authorization = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const navigate = useNavigate()

    const onChangeUsername = e => setUsername(e.target.value)
    const onChangePassword = e => setPassword(e.target.value)

    const dispatch = useDispatch()
    const userData = useSelector(state=>state.user)

    const showError = (description) => {
        dispatch(pushNotification({description, notificationType: 'error'})) // description: userData?.errorCode
    }

    useEffect(() => {
        if(userData && userData.status === 'Успешно') {
            navigate('/')
            window.location.reload();
        }
        if(userData && userData.status === 'Ошибка') {
            showError("Неверные данные для входа")
        }
    }, [userData])

    const login = (e) => {
        e.preventDefault()

        if (username.length < 5) {
            showError('Введите корректное имя')
            return
        }

        else if (password.length < 5) {
            showError('Введите корректный пароль')
            return
        }

        else dispatch(authUser({username, password}))
    }


    return (
        <div className="authorization">
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
                    value={'Войти'}
                    onClick={login}
                />
                <p className="form__help">
                    Нет аккаунта ? <NavLink to={"/register"}>Регистрация</NavLink>
                </p>
                {/*<p>Статус: {userData.status}</p>*/}
            </form>
        </div>
    )
}

export default Authorization