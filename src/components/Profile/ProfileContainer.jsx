import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileTC} from "../../redux/reducer/ProfileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
  state = {
    status: 'enter your status'
  }

  onChangeStatus = (message) => {
    this.setState({
      status: message
    })
  }

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

  render() {
    return <Profile
      profile={this.props.profile}
      status={this.state.status}
      onChangeStatus={this.onChangeStatus}
    />
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

export default compose(
  connect(mapStateToProps, {getProfileTC}), withRouter)(ProfileContainer)




