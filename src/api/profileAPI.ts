import {CommonResponseType, instanceAxios} from "./api";
import {AxiosResponse} from "axios";

export interface ProfileType {
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string | null;
    fullName: string;
    aboutMe: string | null;
    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    };
    photos: {
        small: string | null
        large: string | null
    };
}

export const profileAPI = {
    getProfile(id: string) {
        return instanceAxios.get<ProfileType>(`profile/${id}`).then(response => {
            return response.data;
        });
    },
    setStatus(status: string) {
        return instanceAxios.put<CommonResponseType>("profile/status", {status}).then(response => {
            return response.data;
        });
    },
    getStatus(id: string): Promise<AxiosResponse<string>> {
        return instanceAxios.get(`profile/status/${id}`);
    }
};
