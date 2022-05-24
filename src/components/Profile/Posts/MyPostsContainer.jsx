import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {actionCreators} from "../../../redux/reducer/ProfileReducer";

let mapStateToProps = (state) => (
  {
    postData: state.profilePage.postData,
    postText: state.profilePage.defaultPostText,
    countLike: state.profilePage.defaultCountLike,
  }
);

export default connect(mapStateToProps, {setPost: actionCreators.setPost})(MyPosts);



