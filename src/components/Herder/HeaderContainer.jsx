import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserTC} from "../../redux/reducer/auth-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {loginOutUserTC} from "../../redux/reducer/login-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserTC(this.props.history)
  }

  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

let mapStateToProps = (state) => ({
  isAuthUser: state.authUser.isAuth,
  idAuthUser: state.authUser.id,
  loginAuthUser: state.authUser.login,
  rememberMe: state.loginUser.rememberMe,
})

export default compose(connect(mapStateToProps, {getAuthUserTC, loginOutUserTC}), withRouter)(HeaderContainer)