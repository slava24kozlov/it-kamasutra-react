import {SET_POST, SET_PROFILE, SET_STATUS} from "../action-type";
import {profileAPI} from "../../api/api";

let initialState = {
  postData: [
    {id: 1, message: "This is my first post", author: "Benedict Cumberbatch", like: 23},
    {id: 2, message: "My favorite actor is Will Smith", author: "James McAvoy", like: 5},
    {id: 3, message: "This is a test web page", author: "Daniel Radcliffe", like: 10}
  ],
  profile: null,
  defaultPostText: 'Enter new post',
  defaultCountLike: 0,
  status: 'enter your status'
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
      let post = {
        id: state.postData[state.postData.length - 1].id + 1,
        message: action.postText,
        author: "Indefinite author",
        like: action.countLike
      }
      return {
        ...state,
        postData: [...state.postData, post],
      }
    case SET_PROFILE:
      return {
        ...state,
        profile: {...action.profile}
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return {...state}
  }
}

export const getProfileTC = (currentId) => {
  return (dispatch) => {
    profileAPI.getProfile(currentId)
      .then(data => {
        dispatch(setProfileAC(data))
      })
    profileAPI.getStatus(currentId).then(data => data.status === 200 && dispatch(setStatusAC(data.data)))
  };
}
export const updateStatusTC = (status) => (dispatch) => {
  profileAPI.setStatus(status).then(data => {
    data.resultCode === 0 ? dispatch(setStatusAC(status)) : console.error('Error status')
  })
}

const setProfileAC = (profile) => ({
  type: SET_PROFILE,
  profile
})
export const setPostAC = (postText, countLike) => ({
  type: SET_POST,
  postText,
  countLike,
})
export const setStatusAC = (status) => ({
  type: SET_STATUS,
  status
})


