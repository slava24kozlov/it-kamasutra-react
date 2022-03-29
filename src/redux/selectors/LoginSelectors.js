export const getLogin = (state) => (
  state.loginUser.email
)

export const getPassword = (state) => (
  state.loginUser.password
)

export const getRememberMe = (state) => (
  state.loginUser.rememberMe
)

export const getResponseMessage = (state) => (
  state.loginUser.responseMessage
)