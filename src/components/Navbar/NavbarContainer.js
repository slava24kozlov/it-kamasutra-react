import Navbar from "./Navbar";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
  friendsBar: state.sidebar.FriendsBar,
  isAuthUser: state.authUser.isAuth,
  idAuthUser: state.authUser.id
})

export default connect(mapStateToProps)(Navbar)