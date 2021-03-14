const SET_POST = 'SET-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const UPDATE_COUNT_LIKE = 'UPDATE_COUNT_LIKE';

let initialState = {
    postData: [
        {message: "This is my first post", author: "Slava Nelson", like: 23},
        {message: "My favorite actor is Will Smith", author: "Vlad Lenon", like: 5},
        {message: "It's page of animals", author: "Len Name", like: 10}
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
            state.postData.push(post);
            state.newPostText = '';
            state.newCountLike = 0;
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.newPost;
            return state;
        case UPDATE_COUNT_LIKE:
            state.newCountLike = action.newCountLike;
            return state;
        default:
            return state;
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