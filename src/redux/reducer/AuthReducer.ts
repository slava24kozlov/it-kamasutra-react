import {ResultCode} from "../../api/api";
import { authAPI } from "../../api/authAPI";
import {InferActionsType, ThunkCreator} from "../store";
import {actionCreatorTest} from "../../types/ReducerTypes";

export type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actionCreators | typeof actionCreatorTest>

export const initialState = {
  id: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false as boolean,
  isFetching: true as boolean,
}

export const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case "SN/AUTH/SET-AUTH-USERS":
      return {
        ...state,
        ...action.data,
        isAuth: action.isAuth,
        isFetching: false,
      }
    default:
      return state
  }
}

export const actionCreators = {
  setAuthUser: (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: 'SN/AUTH/SET-AUTH-USERS',
    data: {id, login, email},
    isAuth
  } as const)
}

export const getAuthUserTC = (): ThunkCreator<ActionsType> => (dispatch) => {
  authAPI.checkAuth().then(res => {
    if (res.resultCode === ResultCode.success) {
      let {id, login, email} = res.data
      dispatch(actionCreators.setAuthUser(id, login, email, true))
    } else {
      dispatch(actionCreators.setAuthUser(null, null, null, false))
    }
  })
}


