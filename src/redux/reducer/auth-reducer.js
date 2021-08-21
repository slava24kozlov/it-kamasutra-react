const SET_AUTH_USERS = 'SET-AUTH-USER';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USERS:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return {...state}
    }
}

export const setAuthUserAC = (userId, login, email) => ({
    type: SET_AUTH_USERS,
    data: {userId, login, email}
})
