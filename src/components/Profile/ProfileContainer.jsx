import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileTC, updateStatusTC} from "../../redux/reducer/ProfileReducer";
import {compose} from "redux";
import {getProfile, getStatus} from "../../redux/selectors/ProfileSelectors";
import WithRouter from "../../hoc/WithRouter";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let currentId = this.props.match.params.userId;
    currentId && this.props.getProfileTC(currentId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let currentId = this.props.match.params.userId;
    if (currentId && currentId !== prevProps.match.params.userId) {
      this.props.getProfileTC(this.props.match.params.userId);
    }
  }

  onChangeStatus = (status) => {
    this.props.updateStatusTC(status);
  };

  render() {
    return <Profile
      profile={this.props.profile}
      status={this.props.status}
      onChangeStatus={this.onChangeStatus}
    />;
  }
}

let mapStateToProps = (state) => ({
  profile: getProfile(state),
  status: getStatus(state),
});

export default compose(
  connect(mapStateToProps, {getProfileTC, updateStatusTC}), WithRouter)(ProfileContainer);




