import {AppStateType} from "../store";
import {InitialStateType} from "../reducer/LoginReducer";

export const getLogin = (state: AppStateType): InitialStateType["email"] => (
  state.loginUser.email
)

export const getPassword = (state: AppStateType): InitialStateType["password"] => (
  state.loginUser.password
)

export const getRememberMe = (state: AppStateType): InitialStateType["rememberMe"] => (
  state.loginUser.rememberMe
)

export const getResponseMessage = (state: AppStateType): InitialStateType["responseMessage"] => (
  state.loginUser.responseMessage
)