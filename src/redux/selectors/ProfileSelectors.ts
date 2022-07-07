import {AppStateType} from "../store";
import {InitialStateType} from "../reducer/ProfileReducer";

export const getProfile = (state: AppStateType): InitialStateType["profile"]["data"] => (
    state.profilePage.profile.data
);

export const getProfileIsFetching = (state: AppStateType): InitialStateType["profile"]["isFetching"] => (
    state.profilePage.profile.isFetching
);

export const getStatus = (state: AppStateType): InitialStateType["status"] => (
    state.profilePage.status
);
