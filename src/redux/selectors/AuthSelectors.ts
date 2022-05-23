import {AppStateType} from "../store";
import {InitialStateType} from "../reducer/AuthReducer";

export const getIsAuth = (state: AppStateType): InitialStateType["isAuth"] => (
  state.authUser.isAuth
);

export const getAuthId = (state: AppStateType): InitialStateType["id"] => (
  state.authUser.id
);

export const getLoginAuthUser = (state: AppStateType): InitialStateType["login"] => (
  state.authUser.login
);

export const getIsFetchingAuth = (state: AppStateType): InitialStateType["isFetching"] => (
  state.authUser.isFetching
);