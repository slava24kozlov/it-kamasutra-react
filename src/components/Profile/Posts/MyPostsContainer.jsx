import MyPosts from "./MyPosts";
import {
    setPostAC,
    updatePostTextAC,
    updateCountLikeAC
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
            dispatch(setPostAC())
        },
        updatePostText: (value) => {
            dispatch(updatePostTextAC(value))
        },
        updateLikeText: (value) => {
            dispatch(updateCountLikeAC(value))
        }
    }
)

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;


