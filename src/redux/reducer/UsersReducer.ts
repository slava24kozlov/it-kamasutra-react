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

type UserType = {
  id: number
  name: string
  status: string
  photos: {
    small: string
    large: string
  }
  followed: boolean
}

interface InitialStateType {
  users: Array<UserType>
  currentPage: number
  pageSize: number
  totalUsersCount: number
  isFetching: boolean
  isFollowing: Array<UserType["id"]>
}

type FollowACType = {
  type: typeof FOLLOW
  userId: number
}

type UnfollowACType = {
  type: typeof UNFOLLOW
  userId: number
}

type SetUsersACType = {
  type: typeof SET_USERS
  users: Array<UserType>
}

type SetCurrentPageACType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}

type SetTotalUsersCountACType = {
  type: typeof SET_TOTAL_USERS_COUNT
  totalUsersCount: number
}

type IsFetchingUsersACType = {
  type: typeof IS_FETCHING_USERS
  isFetching: boolean
}

type IsFollowingUsersACType = {
  type: typeof IS_FOLLOWING_USERS
  isFollowing: number
}

type ActionsType = FollowACType | UnfollowACType | SetUsersACType | SetCurrentPageACType | SetTotalUsersCountACType | IsFetchingUsersACType | IsFollowingUsersACType

let initialState: InitialStateType = {
  users: [],
  currentPage: 1,
  pageSize: 100,
  totalUsersCount: 0,
  isFetching: true,
  isFollowing: []
}

export const usersReducer = (state = initialState, action: ActionsType) => {
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

export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: any) => {
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
export const followingTC = (type: typeof FOLLOW | typeof UNFOLLOW, id: number) => (dispatch: any) => {
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

const followAC = (userId: number): FollowACType => ({
  type: FOLLOW,
  userId
})
const unfollowAC = (userId: number): UnfollowACType => ({
  type: UNFOLLOW,
  userId
})
const setUsersAC = (users: Array<UserType>): SetUsersACType => ({
  type: SET_USERS,
  users
})
const setCurrentPageAC = (currentPage: number): SetCurrentPageACType => ({
  type: SET_CURRENT_PAGE,
  currentPage
})
const setTotalUsersCountAC = (totalUsersCount: number): SetTotalUsersCountACType => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount
})
const isFetchingUsersAC = (isFetching: boolean): IsFetchingUsersACType => ({
  type: IS_FETCHING_USERS,
  isFetching
})
const isFollowingUsersAC = (isFollowing: number): IsFollowingUsersACType => ({
  type: IS_FOLLOWING_USERS,
  isFollowing
})

