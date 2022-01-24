import {SET_AUTH_USERS} from "../action-type";
import {authAPI} from "../../api/api";

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USERS:
      return {
        ...state,
        ...action.data,
        isAuth: action.isAuth,
      }
    default:
      return {...state}
  }
}

const setAuthUserAC = (id, login, email, isAuth) => ({
  type: SET_AUTH_USERS,
  data: {id, login, email},
  isAuth
})

export const getAuthUserTC = (history) => (dispatch) => {
  authAPI.checkAuth().then(data => {
    if (data.resultCode === 0) {
      let {id, login, email} = data.data
      dispatch(setAuthUserAC(id, login, email, true))
      history && history.push(`/profile/${id}`)
    } else {
      dispatch(setAuthUserAC(null, null, null, false))
    }
  })
}


