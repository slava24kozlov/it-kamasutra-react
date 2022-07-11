import {AppStateType} from "../store";
import {MessagesStateType} from "../reducer/MessagesReducer";

export const getDataMessages = (state: AppStateType): MessagesStateType["data"] => (
  state.messagesPage.data
);
