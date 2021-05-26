const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: []
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
                users: [...state.users, ...action.users]
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

export default usersReducer;


/*state.postData.push(post);
        state.newPostText = '';
        state.newCountLike = 0;*/

/*stateCopy.newPostText = action.newPost*/
/*state.newPostText = action.newPost;*/

/*stateCopy.newCountLike = action.newCountLike*/
/*state.newCountLike = action.newCountLike;*/