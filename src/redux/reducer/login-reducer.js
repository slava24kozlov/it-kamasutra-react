import {SET_AUTH_LOGIN_DATA, SET_AUTH_RESPONSE_MESSAGE} from "../action-type";
import {authAPI} from "../../api/api";
import {getAuthUserTC} from "./auth-reducer";

let initialState = {
  login: '',
  password: '',
  rememberMe: false,
  responseMessage: '',
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_LOGIN_DATA:
      return {
        ...state,
        ...action.data
      }
    case SET_AUTH_RESPONSE_MESSAGE:
      return {
        ...state,
        responseMessage: action.message
      }
    default:
      return {
        ...state
      }
  }
}

const setLoginData = (login, password, rememberMe) => ({
  type: SET_AUTH_LOGIN_DATA,
  data: {login, password, rememberMe}
})

const setResponseMessage = (message) => ({
  type: SET_AUTH_RESPONSE_MESSAGE,
  message
})

export const loginUserTC = ({email, password, rememberMe}, history) => (dispatch) => {
  authAPI.login(email, password, rememberMe)
    .then(r => {
        if (r.resultCode === 0) {
          rememberMe && dispatch(setLoginData(email, password, rememberMe))
          dispatch(getAuthUserTC(history))
        } else {
          dispatch(setResponseMessage(r.messages[0]))
        }
      }
    ).catch(e => console.error(e))
}

export const loginOutUserTC = (rememberMe) => (dispatch) => {
  authAPI.loginOut()
    .then(r => {
        if (r.resultCode === 0) {
          !rememberMe && dispatch(setLoginData(null, null, false))
          dispatch(getAuthUserTC())
        } else {
          dispatch(setResponseMessage(r.messages[0]))
        }
      }
    ).catch(e => console.error(e))
}