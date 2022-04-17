import axios from "axios";

export const instanceAxios = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'b9d1e421-196c-4a79-b87a-b6c343077786'
  }
})

export enum ResultCode {
  success,
  error,
}

export interface CommonResponseType<T = {}, RC = ResultCode> {
  resultCode: RC
  messages: string[]
  fieldsErrors?: string[]
  data: T
}

