import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserAC} from "../../redux/reducer/auth-reducer";
import authAPI from "../../api/authAPI";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.checkAuth().then(data => {
      if (data.resultCode === 0) {
        let {id, login, email} = data.data
        this.props.setAuthUserAC(id, login, email)
      }
    })
  }

  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.authUser.isAuth,
  login: state.authUser.login,
  userId: state.authUser.userId
})

export default connect(mapStateToProps, {setAuthUserAC})(HeaderContainer);


