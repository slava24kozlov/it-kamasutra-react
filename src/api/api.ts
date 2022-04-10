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

interface CommonApiType {
  resultCode: ResultCode
  messages: string[]
  fieldsErrors?: string[]
  data: object
}

//authAPI
interface GetAuthType extends CommonApiType {
  data: {
    id: number | null
    email: string | null
    login: string | null
  }
}

interface LoginType extends CommonApiType {
  data: {
    userId: number
  }
}

export const authAPI = {
  checkAuth() {
    return instanceAxios.get<GetAuthType>('auth/me').then((response) => {
      return response.data
    })
  },
  login(email: string | null, password: string | null, rememberMe: boolean) {
    return instanceAxios.post<LoginType>('auth/login', {email, password, rememberMe}).then(response => {
      return response.data
    })
  },
  loginOut() {
    return instanceAxios.delete<CommonApiType>('auth/login').then(response => {
      return response.data
    })
  }
}

//profileAPI
export interface ProfileType {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
  }
  photos: {
    small: string | null
    large: string | null
  }
}

export const profileAPI = {
  getProfile(id: number) {
    return instanceAxios.get<ProfileType>(`profile/${id}`).then(response => {
      return response.data
    })
  },
  setStatus(status: string) {
    return instanceAxios.put<CommonApiType>('profile/status', {status}).then(response => {
      return response.data
    })
  },
  getStatus(id: number) {
    return instanceAxios.get<string>(`profile/status/${id}`)
  }
}

//usersAPI
export type UserType = {
  id: number
  name: string
  status: string
  photos: {
    small: string
    large: string
  }
  followed: boolean
}

interface UsersType {
  items: Array<UserType>
  totalCount: number
  error: string | null
}

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instanceAxios.get<UsersType>(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },

  follow(id: number) {
    return instanceAxios.post<CommonApiType>(`follow/${id}`).then(response => {
      return response.data.resultCode
    })
  },

  unfollow(id: number) {
    return instanceAxios.delete<CommonApiType>(`follow/${id}`).then(response => {
      return response.data.resultCode
    })
  }
}


