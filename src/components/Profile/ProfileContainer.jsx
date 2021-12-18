import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileTC, updateStatusTC} from "../../redux/reducer/ProfileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/AuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let currentId = this.props.match.params.userId
    currentId && this.props.getProfileTC(currentId)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let currentId = this.props.match.params.userId
    if (currentId && currentId !== prevProps.match.params.userId) {
      this.props.getProfileTC(this.props.match.params.userId)
    }
  }

  onChangeStatus = (status) => {
    this.props.updateStatusTC(status)
  }

  render() {
    return <Profile
      profile={this.props.profile}
      status={this.props.status}
      onChangeStatus={this.onChangeStatus}
      isAuthProfile={this.props.profile?.userId === this.props.authUserId}
    />
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isAuthUser: state.authUser.isAuth,
  authUserId: state.authUser.id,
})

export default compose(
  connect(mapStateToProps, {getProfileTC, updateStatusTC}), withRouter, withAuthRedirect)(ProfileContainer)




