import {AppStateType} from "../store";
import {initialStateCommonType} from "../reducer/CommonReducer";

export const getResponseError = (state: AppStateType): initialStateCommonType["error"] => (
    state.common.error
);

export const getResponseIsError = (state: AppStateType): initialStateCommonType["error"]["isError"] => (
    state.common.error.isError
);
