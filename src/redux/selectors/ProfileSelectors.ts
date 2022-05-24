import {AppStateType} from "../store";
import {InitialStateType} from "../reducer/ProfileReducer";

export const getProfile = (state: AppStateType): InitialStateType["profile"] => (
  state.profilePage.profile
);

export const getStatus = (state: AppStateType): InitialStateType["status"] => (
  state.profilePage.status
);