import {SET_POST, SET_PROFILE, UPDATE_COUNT_LIKE, UPDATE_POST_TEXT} from "../action-type";
import {profileAPI} from "../../api/api";

let initialState = {
  postData: [
    {id: 1, message: "This is my first post", author: "Benedict Cumberbatch", like: 23},
    {id: 2, message: "My favorite actor is Will Smith", author: "James McAvoy", like: 5},
    {id: 3, message: "This is a test web page", author: "Daniel Radcliffe", like: 10}
  ],
  profile: null,
  newPostText: 'Enter new post',
  newCountLike: 0
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
      let post = {
        message: state.newPostText,
        author: "Indefinite author",
        like: state.newCountLike
      }
      return {
        ...state,
        postData: [...state.postData, post],
        newPostText: '',
        newCountLike: 0
      }
    case SET_PROFILE:
      return {
        ...state,
        profile: {...action.profile}
      }
    case UPDATE_POST_TEXT:
      return {
        ...state,
        newPostText: action.newPost
      }
    case UPDATE_COUNT_LIKE:
      return {
        ...state,
        newCountLike: action.newCountLike
      }
    default:
      return {...state}
  }
}

export const getProfileTC = (currentId) => (dispatch) => {
  profileAPI.getProfile(currentId)
    .then(data => {dispatch(setProfileAC(data))})
}

const setProfileAC = (profile) => ({
  type: SET_PROFILE,
  profile
})
export const setPostAC = () => ({
  type: SET_POST
})
export const updatePostTextAC = (newPost) => ({
  type: UPDATE_POST_TEXT,
  newPost
})
export const updateCountLikeAC = (newCountLike) => ({
  type: UPDATE_COUNT_LIKE,
  newCountLike
})


