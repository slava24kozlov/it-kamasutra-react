import {SET_AUTH_USERS} from "../action-type";
import {Dispatch} from "redux";
import authAPI, {CheckAuthDataType} from "../../api/authAPI";
import {ResultCode} from "../../api/api";

export type SetAuthUserACType = {
  type: typeof SET_AUTH_USERS
  data: CheckAuthDataType
  isAuth: boolean
}

const initialState = {
  id: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false as boolean,
  isFetching: true as boolean,
}

export type InitialStateType = typeof initialState

export const authReducer = (state = initialState, action: SetAuthUserACType): InitialStateType => {
  switch (action.type) {
    case SET_AUTH_USERS:
      return {
        ...state,
        ...action.data,
        isAuth: action.isAuth,
        isFetching: false,
      }
    default:
      return {...state}
  }
}

const setAuthUserAC = (id: number | null, login: string | null, email: string | null, isAuth: boolean): SetAuthUserACType => ({
  type: SET_AUTH_USERS,
  data: {id, login, email},
  isAuth
})

export const getAuthUserTC = () => (dispatch: Dispatch<SetAuthUserACType>): void => {
  authAPI.checkAuth().then(res => {
    if (res.resultCode === ResultCode.success) {
      let {id, login, email} = res.data
      dispatch(setAuthUserAC(id, login, email, true))
    } else {
      dispatch(setAuthUserAC(null, null, null, false))
    }
  })
}


