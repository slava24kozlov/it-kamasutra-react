const SET_POST = 'SET-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const UPDATE_COUNT_LIKE = 'UPDATE_COUNT_LIKE';

let initialState = {
    postData: [
        {message: "This is my first post", author: "Benedict Cumberbatch", like: 23},
        {message: "My favorite actor is Will Smith", author: "James McAvoy", like: 5},
        {message: "This is a test web page", author: "Daniel Radcliffe", like: 10}
        ],
    newPostText: 'Enter new post',
    newCountLike: 0
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POST:
            let post = {
                message: state.newPostText,
                author: "Sam Nem",
                like: state.newCountLike
            }
            return {
                ...state,
                postData: [...state.postData, post],
                newPostText: '',
                newCountLike: 0
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

export const actionCreatorSetPost = () => ({
    type: SET_POST
})

export const actionCreatorUpdatePostText = (action) => ({
    type: UPDATE_POST_TEXT,
    newPost: action
})
export const actionCreatorUpdateCountLike = (action) => ({
    type: UPDATE_COUNT_LIKE,
    newCountLike: action
})

export default profileReducer;



/*state.postData.push(post);
        state.newPostText = '';
        state.newCountLike = 0;*/

/*stateCopy.newPostText = action.newPost*/
/*state.newPostText = action.newPost;*/

/*stateCopy.newCountLike = action.newCountLike*/
/*state.newCountLike = action.newCountLike;*/