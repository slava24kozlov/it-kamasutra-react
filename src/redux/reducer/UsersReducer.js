const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL_USERS_COUNT';
const IS_FETCHING_USERS = 'IS-FETCHING-USERS';
const IS_FOLLOWING_USERS = 'IS-FOLLOWING-USERS';

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
                currentPage: action.currentPage
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

export const followAC = (userId) => ({
    type: FOLLOW,
    userId
})
export const unfollowAC = (userId) => ({
    type: UNFOLLOW,
    userId
})
export const setUsersAC = (users) => ({
    type: SET_USERS,
    users
})
export const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})
export const setTotalUsersCountAC = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
})
export const isFetchingUsersAC = (isFetching) => ({
    type: IS_FETCHING_USERS,
    isFetching
})
export const isFollowingUsersAC = (isFollowing) => ({
    type: IS_FOLLOWING_USERS,
    isFollowing
})