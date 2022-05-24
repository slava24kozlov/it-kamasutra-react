import {CommonResponseType, instanceAxios} from "./api";

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
        return response.data;
      });
  },

  follow(id: number) {
    return instanceAxios.post<CommonResponseType>(`follow/${id}`).then(response => {
      return response.data.resultCode;
    });
  },

  unfollow(id: number) {
    return instanceAxios.delete<CommonResponseType>(`follow/${id}`).then(response => {
      return response.data.resultCode;
    });
  }
};