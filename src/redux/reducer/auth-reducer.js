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
        isAuth: true
      }
    default:
      return {...state}
  }
}

export const getAuthUserTC = () => (dispatch) => {
  authAPI.checkAuth().then(data => {
    if (data.resultCode === 0) {
      let {id, login, email} = data.data
      dispatch(setAuthUserAC(id, login, email))
    }
  })
}
const setAuthUserAC = (id, login, email) => ({
  type: SET_AUTH_USERS,
  data: {id, login, email}
})


