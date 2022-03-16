import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {loginOutUserTC} from "../../redux/reducer/login-reducer";
import {getAuthId, getIsAuth, getIsRememberMe, getLoginAuthUser} from "../../redux/selectors/AuthSelectors";

function HeaderContainer(props) {
  return (
    <Header {...props}/>
  )
}

let mapStateToProps = (state) => ({
  isAuthUser: getIsAuth(state),
  idAuthUser: getAuthId(state),
  loginAuthUser: getLoginAuthUser(state),
  rememberMe: getIsRememberMe(state),
})

export default connect(mapStateToProps, {loginOutUserTC})(HeaderContainer);