export const handleError = (state, action) => {
    const err = `[${action.error.name}]: ${action.error.code} - ${action.error.message}`
    state.status = 'Ошибка при получении: ' + err
}

export const handleSuccess = (state, action, type) => {
    state.status = 'Успешно'
    state[type] = action.payload
    return state
}

export const handlePending = state => {
    state.status = 'Загрузка данных...'
    return state
}

export default handleSuccess