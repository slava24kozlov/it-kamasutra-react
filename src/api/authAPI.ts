import {CommonResponseType, instanceAxios} from "./api";

export type CheckAuthDataType = {
    id: number | null
    email: string | null
    login: string | null
}

type LoginDataType = {
    userId: number
}

export const authAPI = {
    checkAuth() {
        return instanceAxios.get<CommonResponseType<CheckAuthDataType>>("auth/me")
            .then((response) => {
                return response.data;
            });
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instanceAxios.post<CommonResponseType<LoginDataType>>("auth/login", {
            email,
            password,
            rememberMe
        }).then(response => {
            return response.data;
        });
    },
    loginOut() {
        return instanceAxios.delete<CommonResponseType>("auth/login").then(response => {
            return response.data;
        });
    }
};
