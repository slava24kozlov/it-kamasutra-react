import {getAuthUserTC} from "./AuthReducer";
import {InferActionsType, ThunkCreator} from "../store";
import { ResultCode } from "../../api/api";
import {authAPI} from "../../api/authAPI";

export type SetLoginDataType = {
  email: string
  password: string
  rememberMe: boolean
}
export type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actionCreators>

const initialState = {
  email: "" as string,
  password: "" as string,
  rememberMe: false as boolean,
  responseMessage: "" as string,
};

export const loginReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case "SN/LOGIN/SET_AUTH_LOGIN_DATA":
      return {
        ...state,
        ...action.data
      };
    case "SN/LOGIN/SET_AUTH_RESPONSE_MESSAGE":
      return {
        ...state,
        responseMessage: action.message
      };
    default:
      return {
        ...state
      };
  }
};

export const actionCreators = {
  setLoginData: (email: string, password: string, rememberMe: boolean) => ({
    type: "SN/LOGIN/SET_AUTH_LOGIN_DATA",
    data: {email, password, rememberMe}
  } as const),
  setResponseMessage: (message: string) => ({
    type: "SN/LOGIN/SET_AUTH_RESPONSE_MESSAGE",
    message
  } as const)
};

export const loginUserTC = ({email, password, rememberMe}: SetLoginDataType): ThunkCreator<ActionsType> => (dispatch) => {
  authAPI.login(email, password, rememberMe)
    .then(res => {
        if (res.resultCode === ResultCode.success) {
          rememberMe && dispatch(actionCreators.setLoginData(email, password, rememberMe));
          dispatch(getAuthUserTC());
        } else {
          dispatch(actionCreators.setResponseMessage(res.messages[0]));
        }
      }
    ).catch(e => console.error(e));
};

export const loginOutUserTC = (rememberMe: boolean): ThunkCreator<ActionsType> => (dispatch): void => {
  authAPI.loginOut()
    .then(res => {
        if (res.resultCode === 0) {
          !rememberMe && dispatch(actionCreators.setLoginData("", "", false));
          dispatch(getAuthUserTC());
        } else {
          dispatch(actionCreators.setResponseMessage(res.messages[0]));
        }
      }
    ).catch(e => console.error(e));
};
