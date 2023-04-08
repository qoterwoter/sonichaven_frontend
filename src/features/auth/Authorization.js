import React, {useState} from "react";

const Authorization = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const onChangeUsername = e => setUsername(e.target.value)
    const onChangePassword = e => setPassword(e.target.value)

    const login = e => {
        e.preventDefault()


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

            <label htmlFor='login'>Введите пароль</label>
            <input
                id='login'
                type='password'
                placeholder='Пароль'
                onChange={onChangePassword}
                value={password}
            />
            <input
                type='submit'
            />
        </form>
        </>
    )
}

export default Authorization