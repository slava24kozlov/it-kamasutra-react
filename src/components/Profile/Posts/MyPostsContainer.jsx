import React from 'react';
import MyPosts from "./MyPosts";
import {
    actionCreatorSetPost,
    actionCreatorUpdatePostText,
    actionCreatorUpdateCountLike
} from '../../../redux/reducer/ProfileReducer';
import {connect} from "react-redux";


let mapStateToProps = (state) => (
    {
        postData: state.ProfilePage.postData,
        newPostText: state.ProfilePage.newPostText,
        newCountLike: state.ProfilePage.newCountLike
    }
)

let mapDispatchToProps = (dispatch) => (
    {
        addPost: () => {
            dispatch(actionCreatorSetPost())
        },
        updatePostText: (value) => {
            dispatch(actionCreatorUpdatePostText(value))
        },
        updateLikeText: (value) => {
            dispatch(actionCreatorUpdateCountLike(value))
        }
    }
)

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;


