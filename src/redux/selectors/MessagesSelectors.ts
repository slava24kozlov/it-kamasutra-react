import {AppStateType} from "../store";
import {InitialStateType} from "../reducer/MessagesReducer";

export const getDataMessages = (state: AppStateType): InitialStateType["data"] => (
  state.messagesPage.data
);