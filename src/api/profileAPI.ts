import {CommonResponseType, instanceAxios} from "./api";
import {AxiosResponse} from "axios";

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
      return response.data;
    });
  },
  setStatus(status: string) {
    return instanceAxios.put<CommonResponseType>("profile/status", {status}).then(response => {
      return response.data;
    });
  },
  getStatus(id: number): Promise<AxiosResponse<string>> {
    return instanceAxios.get(`profile/status/${id}`);
  }
};