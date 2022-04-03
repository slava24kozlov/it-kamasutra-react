import {AppStateType} from "../store";
import {InitialStateType} from "../reducer/MessagesReducer";

export const getDialogs = (state: AppStateType): InitialStateType["dialogData"] => (
  state.messagesPage.dialogData
)

export const getMessages = (state: AppStateType): InitialStateType["messagesData"] => (
  state.messagesPage.messagesData
)