import {usersAPI, UserType} from "../../api/usersAPI";
import {InferActionsType, ThunkCreator} from "../store";

export interface InitialStateType {
  users: Array<UserType>
  currentPage: number
  pageSize: number
  totalUsersCount: number
  isFetching: boolean
  isFollowing: Array<UserType["id"]>
}
type ActionsType = InferActionsType<typeof actionCreators>

const initialState: InitialStateType = {
  users: [],
  currentPage: 1,
  pageSize: 100,
  totalUsersCount: 0,
  isFetching: true,
  isFollowing: []
};

export const usersReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case "SN/USERS/FOLLOW":
      return {
        ...state,
        users: state.users.map(el => {
          if (el.id === action.userId) {
            return {...el, followed: true};
          }
          return el;
        }),
        isFollowing: state.isFollowing.filter(el => el !== action.userId)
      };
    case "SN/USERS/UNFOLLOW":
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action.userId) {
            return {...el, followed: false};
          }
          return el;
        }),
        isFollowing: state.isFollowing.filter(el => el !== action.userId)
      };
    case "SN/USERS/SET-USERS":
      return {
        ...state,
        users: [...action.users]
      };
    case "SN/USERS/SET-CURRENT-PAGE":
      return {
        ...state,
        currentPage: action.currentPage,
        users: []
      };
    case "SN/USERS/SET-TOTAL-USERS-COUNT":
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      };
    case "SN/USERS/IS-FETCHING-USERS":
      return {
        ...state,
        isFetching: action.isFetching
      };
    case "SN/USERS/IS-FOLLOWING-USERS":
      return {
        ...state,
        isFollowing: [...state.isFollowing, action.isFollowing]
      };
    default:
      return state;
  }
};

const actionCreators = {
  followAC: (userId: number) => ({
    type: "SN/USERS/FOLLOW",
    userId
  } as const),
  unfollowAC: (userId: number) => ({
    type: "SN/USERS/UNFOLLOW",
    userId
  } as const),
  setUsersAC: (users: Array<UserType>) => ({
    type: "SN/USERS/SET-USERS",
    users
  } as const),
  setCurrentPageAC: (currentPage: number) => ({
    type: "SN/USERS/SET-CURRENT-PAGE",
    currentPage
  } as const),
  setTotalUsersCountAC: (totalUsersCount: number) => ({
    type: "SN/USERS/SET-TOTAL-USERS-COUNT",
    totalUsersCount
  } as const),
  isFetchingUsersAC: (isFetching: boolean) => ({
    type: "SN/USERS/IS-FETCHING-USERS",
    isFetching
  } as const),
  isFollowingUsersAC: (isFollowing: number) => ({
    type: "SN/USERS/IS-FOLLOWING-USERS",
    isFollowing
  } as const)
};

export const getUsersTC = (currentPage: number, pageSize: number): ThunkCreator<ActionsType> => (dispatch) => {
  dispatch(actionCreators.setCurrentPageAC(currentPage));
  dispatch(actionCreators.isFetchingUsersAC(true));
  usersAPI.getUsers(currentPage, pageSize)
    .then(data => {
        dispatch(actionCreators.setUsersAC(data.items));
        dispatch(actionCreators.setTotalUsersCountAC(data.totalCount));
        dispatch(actionCreators.isFetchingUsersAC(false));
      }
    );
};
export const followingTC = (id: number, follow: boolean): ThunkCreator<ActionsType> => (dispatch) => {
  dispatch(actionCreators.isFollowingUsersAC(id));
  if (follow) {
    usersAPI.follow(id).then(result => {
      result === 0 && dispatch(actionCreators.followAC(id));
    });
  } else {
    usersAPI.unfollow(id).then(result => {
      result === 0 && dispatch(actionCreators.unfollowAC(id));
    });
  }
};

