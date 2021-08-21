import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserAC} from "../../redux/reducer/auth-reducer";
import axios from "axios";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0//auth/me', {
      withCredentials: true,
    }).then(response => {
      if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
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


