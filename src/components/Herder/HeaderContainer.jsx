import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserTC} from "../../redux/reducer/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserTC()
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
  loginAuthUser: state.authUser.login
})

export default connect(mapStateToProps, {getAuthUserTC})(HeaderContainer);


