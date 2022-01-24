import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {loginOutUserTC} from "../../redux/reducer/login-reducer";

function HeaderContainer(props) {
  return (
    <Header {...props}/>
  )
}

let mapStateToProps = (state) => ({
  isAuthUser: state.authUser.isAuth,
  idAuthUser: state.authUser.id,
  loginAuthUser: state.authUser.login,
  rememberMe: state.loginUser.rememberMe,
})

export default connect(mapStateToProps, {loginOutUserTC})(HeaderContainer)