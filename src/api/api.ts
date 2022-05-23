import axios from "axios";

export const instanceAxios = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        "API-KEY": process.env.REACT_APP_API_KEY
    }
});

export enum ResultCode {
    success,
    error,
}

export interface CommonResponseType<T, RC = ResultCode> {
    resultCode: RC;
    messages: string[];
    fieldsErrors?: string[];
    data: T;
}

