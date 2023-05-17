import React, {useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {pushNotification} from "../../reducers/notificationSlice";
import {registerUser} from "../../reducers/userSlice";

const Registration = props => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [password2,setPassword2] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const navigate = useNavigate()

    const onChangeUsername = e => setUsername(e.target.value)
    const onChangePassword = e => setPassword(e.target.value)
    const onChangePassword2 = e => setPassword2(e.target.value)
    const onChangeEmail = e => setEmail(e.target.value)
    const onChangeFirstName = e => setFirstName(e.target.value)
    const onChangeLastName = e => setLastName(e.target.value)

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

    const register = (e) => {
        e.preventDefault()

        if (firstName.length < 2) {
            showError('Введите корректное имя')
            return
        }

        if (lastName.length < 4) {
            showError('Введите корректную фамилию')
            return
        }

        if (username.length < 5) {
            showError('Введите корректный логин')
            return
        }

        if (password.length < 5 || password2.length < 5) {
            showError('Введите корректный пароль')
            return
        }

        if (password !== password2) {
            showError('Пароли не совпадают')
            return
        }
        if (email.length < 10) {
            showError('Введите корректный email')
            return
        }
        console.log(username, password)
        dispatch(registerUser({firstName, lastName, username, password, email}))
    }

    return (
    <main className={'main'}>
        <div className="registration">
            <form className='registerForm form' onSubmit={register}>
                <div className="row">
                    <label className='form__label' htmlFor='firstName'>Введите имя:</label>
                    <input
                        className='form__input'
                        id='firstName'
                        type='text'
                        placeholder='Иван'
                        onChange={onChangeFirstName}
                        value={firstName}
                    />
                </div>
                <div className="row">
                    <label className='form__label' htmlFor='lastName'>Введите фамилию:</label>
                    <input
                        className='form__input'
                        id='lastName'
                        type='text'
                        placeholder='Иванов'
                        onChange={onChangeLastName}
                        value={lastName}
                    />
                </div>
                <div className="row">
                    <label className='form__label' htmlFor='login'>Введите логин:</label>
                    <input
                        className='form__input'
                        id='login'
                        type='text'
                        placeholder='ivan_zxc'
                        onChange={onChangeUsername}
                        value={username}
                    />
                </div>
                <div className="row">
                    <label className='form__label' htmlFor='email'>Почта:</label>
                    <input
                        className='form__input'
                        id='email'
                        type='email'
                        placeholder='ivanov@ivan.ru'
                        onChange={onChangeEmail}
                        value={email}
                    />
                </div>
                <div className="row">
                    <label className='form__label' htmlFor='password'>Введите пароль:</label>
                    <input
                        className='form__input'
                        id='password'
                        type='password'
                        placeholder='Пароль'
                        onChange={onChangePassword}
                        value={password}
                    />
                </div>
                <div className="row">
                    <label className='form__label' htmlFor='password2'>Подтвердите пароль:</label>
                    <input
                        className='form__input'
                        id='password2'
                        type='password'
                        placeholder='Пароль'
                        onChange={onChangePassword2}
                        value={password2}
                    />
                </div>
                <div className="row row_submit">
                    <input
                        className='form__input_submit form__input'
                        type='submit'
                        value={'Зарегистрироваться'}
                        onClick={register}
                    />
                    <p className="form__help">
                        Уже есть аккаунт ? <NavLink to={"/auth"}>Войти</NavLink>
                    </p>
                </div>
                {/*<p>Статус: {userData.status}</p>*/}
            </form>
        </div>
    </main>
    )
}

export default Registration