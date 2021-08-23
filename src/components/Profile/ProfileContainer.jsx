import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfileAC} from "../../redux/reducer/ProfileReducer";
import {withRouter} from "react-router-dom/cjs/react-router-dom";
import profileAPI from "../../api/profileAPI";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let currentId = this.props.match.params.userId
      ? this.props.match.params.userId : 2
    profileAPI.getProfile(currentId).then(data => {
      this.props.setProfileAC(data)
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let currentId = this.props.match.params.userId
    if (currentId !== prevProps.match.params.userId) {
      profileAPI.getProfile(currentId).then(data => {
        this.props.setProfileAC(data)
      })
    }
  }

  render() {
    return <Profile {...this.props}/>
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

let profileContainerWithRouter = withRouter(ProfileContainer)

export default connect(
  mapStateToProps, {setProfileAC})(profileContainerWithRouter)




