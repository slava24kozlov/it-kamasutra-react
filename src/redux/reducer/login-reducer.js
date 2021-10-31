import {SET_LOGIN_USER} from "../action-type";

let initialState = {
  login: '',
  password: '',
  rememberMe: false,
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_USER:
      return {
        ...state,
        ...action.data
      }
    default:
      return {
        ...state
      }
  }
}

export const setLoginUserAC = (login, password, rememberMe) => ({
  type: SET_LOGIN_USER,
  data: {login, password, rememberMe}
})