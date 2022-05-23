import {AppStateType} from "../store";
import {InitialStateType} from "../reducer/UsersReducer";

export const getUsers = (state: AppStateType): InitialStateType["users"] => (
  state.usersPage.users
);

export const getCurrentPage = (state: AppStateType): InitialStateType["currentPage"] => (
  state.usersPage.currentPage
);

export const getTotalUsersCount = (state: AppStateType): InitialStateType["totalUsersCount"] => (
  state.usersPage.totalUsersCount
);

export const getPageSize = (state: AppStateType): InitialStateType["pageSize"] => (
  state.usersPage.pageSize
);

export const getIsFetching = (state: AppStateType): InitialStateType["isFetching"] => (
  state.usersPage.isFetching
);

export const getIsFollowing = (state: AppStateType): InitialStateType["isFollowing"] => (
  state.usersPage.isFollowing
);
