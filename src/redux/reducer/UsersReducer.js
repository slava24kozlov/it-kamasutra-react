import {usersAPI} from "../../api/api";
import {
  FOLLOW,
  IS_FETCHING_USERS,
  IS_FOLLOWING_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  SET_USERS,
  UNFOLLOW
} from "../action-type";


let initialState = {
  users: [],
  currentPage: 1,
  pageSize: 100,
  totalUsersCount: 0,
  isFetching: true,
  isFollowing: []
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(el => {
          if (el.id === action.userId) {
            return {...el, followed: true}
          }
          return el
        }),
        isFollowing: state.isFollowing.filter(el => el !== action.userId)
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action.userId) {
            return {...el, followed: false}
          }
          return el
        }),
        isFollowing: state.isFollowing.filter(el => el !== action.userId)
      }
    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
        users: []
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    case IS_FETCHING_USERS:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case IS_FOLLOWING_USERS:
      return {
        ...state,
        isFollowing: [...state.isFollowing, action.isFollowing]
      }
    default:
      return {...state}
  }
}

export const getUsersTC = (currentPage, pageSize) => (dispatch) => {
  dispatch(setCurrentPageAC(currentPage))
  dispatch(isFetchingUsersAC(true))
  usersAPI.getUsers(currentPage, pageSize)
    .then(data => {
        dispatch(setUsersAC(data.items))
        dispatch(setTotalUsersCountAC(data.totalCount))
        dispatch(isFetchingUsersAC(false))
      }
    )
}
export const followingTC = (type, id) => (dispatch) => {
  dispatch(isFollowingUsersAC(id))
  if (type === FOLLOW) {
    usersAPI.follow(id).then(result => {
      result === 0 && dispatch(followAC(id))
    })
  } else {
    usersAPI.unfollow(id).then(result => {
      result === 0 && dispatch(unfollowAC(id))
    })
  }
}

const followAC = (userId) => ({
  type: FOLLOW,
  userId
})
const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId
})
const setUsersAC = (users) => ({
  type: SET_USERS,
  users
})
const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage
})
const setTotalUsersCountAC = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount
})
const isFetchingUsersAC = (isFetching) => ({
  type: IS_FETCHING_USERS,
  isFetching
})
const isFollowingUsersAC = (isFollowing) => ({
  type: IS_FOLLOWING_USERS,
  isFollowing
})

