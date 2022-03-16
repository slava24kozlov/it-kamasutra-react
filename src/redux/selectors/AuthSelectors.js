export const getIsAuth = (state) => (
  state.authUser.isAuth
)

export const getAuthId = (state) => (
  state.authUser.id
)

export const getLoginAuthUser = (state) => (
  state.authUser.login
)

export const getIsRememberMe = (state) => (
  state.loginUser.rememberMe
)