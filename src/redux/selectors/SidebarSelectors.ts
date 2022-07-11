import {AppStateType} from "../store";
import {SidebarStateType} from "../reducer/SidebarReducer";

export const getFriends = (state: AppStateType): SidebarStateType["FriendsBar"] => (
  state.sidebar.FriendsBar
);
