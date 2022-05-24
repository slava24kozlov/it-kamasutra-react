import {Dispatch} from "redux";
import {profileAPI, ProfileType} from "../../api/profileAPI";
import {InferActionsType} from "../store";

interface PostDataType {
    id: number;
    message: string;
    author: string;
    like: number;
}

export interface InitialStateType {
    postData: Array<PostDataType>;
    profile: ProfileType | null;
    defaultPostText: string;
    defaultCountLike: number;
    status: string | number;
}

type ActionsType = InferActionsType<typeof actionCreators>

const initialState: InitialStateType = {
    postData: [
        {id: 1, message: "This is my first post", author: "Benedict Cumberbatch", like: 23},
        {id: 2, message: "My favorite actor is Will Smith", author: "James McAvoy", like: 5},
        {id: 3, message: "This is a test web page", author: "Daniel Radcliffe", like: 10}
    ],
    profile: null,
    defaultPostText: "Enter new post",
    defaultCountLike: 0,
    status: "enter your status",
};

export const profileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SN/PROFILE/SET-POST":
            return {
                ...state,
                postData: [...state.postData, {
                    id: state.postData[state.postData.length - 1].id + 1,
                    message: action.postText,
                    author: "Indefinite author",
                    like: action.countLike
                }],
            };
        case "SN/PROFILE/SET-PROFILE":
            return {
                ...state,
                profile: {...action.profile}
            };
        case "SN/PROFILE/SET-STATUS":
            return {
                ...state,
                status: action.status
            };
        default:
            return {...state};
    }
};

export const getProfileTC = (currentId: number) => (dispatch: Dispatch<ActionsType>) => {
    profileAPI.getProfile(currentId)
        .then(data => {
            dispatch(actionCreators.setProfile(data));
        });
    profileAPI.getStatus(currentId).then(data => data.status === 200 && dispatch(actionCreators.setStatus(data.data)));
};

export const updateStatusTC = (status: string) => (dispatch: Dispatch<ActionsType>): void => {
    profileAPI.setStatus(status).then(data => {
        data.resultCode === 0 ? dispatch(actionCreators.setStatus(status)) : console.error("Error status");
    });
};

export const actionCreators = {
    setProfile: (profile: ProfileType) => ({
        type: "SN/PROFILE/SET-PROFILE",
        profile
    } as const),
    setPost: (postText: string, countLike: number) => ({
        type: "SN/PROFILE/SET-POST",
        postText,
        countLike,
    } as const),
    setStatus: (status: string) => ({
        type: "SN/PROFILE/SET-STATUS",
        status
    } as const)
};


