import {InferActionsType} from "../store";

export const initialStateCommon = {
    error: {
        code: null as string | null,
        name: null as string | null,
        message: null as string | null,
        isError: false as boolean,
    }
};

export type initialStateCommonType = typeof initialStateCommon

type ActionType = InferActionsType<typeof actionCreatorsCommon>

export const commonReducer = (state = initialStateCommon, action: ActionType) => {
    switch (action.type) {
        case "SN/COMMON/SET-RESPONSE-ERROR-MESSAGE":
            return {
                ...state,
                error: {
                    code: action.error.code,
                    name: action.error.name,
                    message: action.error.message,
                    isError: true
                },
            };
        default:
            return state;
    }
};

export const actionCreatorsCommon = {
    setResponseErrorMessage: (code: string, name: string, message: string) => ({
        type: "SN/COMMON/SET-RESPONSE-ERROR-MESSAGE",
        error: {
            code, name, message
        }
    } as const)
};
