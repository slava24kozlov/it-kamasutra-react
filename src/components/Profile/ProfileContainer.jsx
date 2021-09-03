import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileTC} from "../../redux/reducer/ProfileReducer";
import {withRouter} from "react-router-dom/cjs/react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let currentId = this.props.match.params.userId
    currentId && this.props.getProfileTC(currentId)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let currentId = this.props.match.params.userId
    if (currentId && currentId !== prevProps.match.params.userId) {
      this.props.getProfileTC(currentId)
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
  mapStateToProps, {getProfileTC})(profileContainerWithRouter)




