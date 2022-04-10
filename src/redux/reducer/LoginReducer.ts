import {SET_AUTH_LOGIN_DATA, SET_AUTH_RESPONSE_MESSAGE} from "../action-type";
import {authAPI, ResultCode} from "../../api/api";
import {getAuthUserTC, SetAuthUserACType} from "./AuthReducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../store";

type SetLoginDataType = {
  type: typeof SET_AUTH_LOGIN_DATA
  data: {
    email: string | null
    password: string | null
    rememberMe: boolean
  }
}

type SetResponseMessageType = {
  type: typeof SET_AUTH_RESPONSE_MESSAGE
  message: string
}

type ActionCreatorTypes = SetLoginDataType | SetResponseMessageType
type ThunkCreatorType = ThunkAction<void, AppStateType, unknown, ActionCreatorTypes | SetAuthUserACType>

let initialState = {
  email: '' as string | null,
  password: '' as string | null,
  rememberMe: false as boolean,
  responseMessage: '' as string,
}

export type InitialStateType = typeof initialState

export const loginReducer = (state = initialState, action: SetLoginDataType | SetResponseMessageType): InitialStateType => {
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

const setLoginData = (email: string | null, password: string | null, rememberMe: boolean): SetLoginDataType => ({
  type: SET_AUTH_LOGIN_DATA,
  data: {email, password, rememberMe}
})

const setResponseMessage = (message: string): SetResponseMessageType => ({
  type: SET_AUTH_RESPONSE_MESSAGE,
  message
})

export const loginUserTC = ({email, password, rememberMe}: SetLoginDataType['data']): ThunkCreatorType => (dispatch) => {
  authAPI.login(email, password, rememberMe)
    .then(res => {
        if (res.resultCode === ResultCode.success) {
          rememberMe && dispatch(setLoginData(email, password, rememberMe))
          dispatch(getAuthUserTC())
        } else {
          dispatch(setResponseMessage(res.messages[0]))
        }
      }
    ).catch(e => console.error(e))
}

export const loginOutUserTC = (rememberMe: boolean): ThunkCreatorType => (dispatch): void => {
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