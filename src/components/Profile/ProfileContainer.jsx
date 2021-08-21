import React from 'react';
import axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfileAC} from "../../redux/reducer/ProfileReducer";
import {withRouter} from "react-router-dom/cjs/react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let currentId = this.props.match.params.userId
      ? this.props.match.params.userId : 2
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + currentId)
      .then(response => {
        this.props.setProfileAC(response.data)
      })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let currentId = this.props.match.params.userId
    if (currentId !== prevProps.match.params.userId) {
      axios.get('https://social-network.samuraijs.com/api/1.0/profile/'
        + currentId)
        .then(response => this.props.setProfileAC(response.data))
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




