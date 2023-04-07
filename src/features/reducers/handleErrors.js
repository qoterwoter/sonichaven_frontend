const handleErrors = (state, action) => {
  const err = `[${action.error.name}]: ${action.error.code} - ${action.error.message}`
  state.status = 'Ошибка при получении: ' + err
  console.log(action)
}

export default handleErrors