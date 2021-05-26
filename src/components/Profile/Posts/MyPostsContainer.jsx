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
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
        newCountLike: state.profilePage.newCountLike
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


