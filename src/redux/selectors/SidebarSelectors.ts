import {AppStateType} from "../store";
import {InitialStateType} from "../reducer/SidebarReducer";

export const getFriends = (state: AppStateType): InitialStateType["FriendsBar"] => (
  state.sidebar.FriendsBar
)