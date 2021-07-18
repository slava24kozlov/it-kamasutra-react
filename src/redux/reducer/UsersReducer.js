const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 100,
    totalUsersCount: 0
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((el) => {
                    if (el.id === action.userId) {
                        return {...el, followed: true}
                    }
                    return el
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((el) => {
                    if (el.id === action.userId) {
                        return {...el, followed: false}
                    }
                    return el
                })
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
        default:
            return {...state}
    }
}

export const followAC = (action) => ({
    type: FOLLOW,
    userId: action
})

export const unfollowAC = (action) => ({
    type: UNFOLLOW,
    userId: action
})
export const setUsersAC = (action) => ({
    type: SET_USERS,
    users: action
})
export const setCurrentPageAC = (action) => ({
    type: SET_CURRENT_PAGE,
    currentPage: action
})
export const setTotalUsersCountAC = (action) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: action
})