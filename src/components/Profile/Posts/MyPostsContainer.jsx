import MyPosts from "./MyPosts";
import {setPostAC} from '../../../redux/reducer/ProfileReducer';
import {connect} from "react-redux";

let mapStateToProps = (state) => (
  {
    postData: state.profilePage.postData,
    postText: state.profilePage.defaultPostText,
    countLike: state.profilePage.defaultCountLike,
  }
)

export default connect(mapStateToProps, {setPostAC})(MyPosts);



