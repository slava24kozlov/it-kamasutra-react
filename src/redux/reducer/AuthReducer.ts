import {SET_AUTH_USERS} from "../action-type";
import {authAPI} from "../../api/api";

type SetAuthUserACType = {
  type: typeof SET_AUTH_USERS
  data: {
    id: number | null
    login: string | null
    email: string | null
  }
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

export const getAuthUserTC = () => (dispatch: any) => {
  authAPI.checkAuth().then(data => {
    if (data.resultCode === 0) {
      let {id, login, email} = data.data
      dispatch(setAuthUserAC(id, login, email, true))
    } else {
      dispatch(setAuthUserAC(null, null, null, false))
    }
  })
}


