import React from "react";
import {connect} from "react-redux";
import {
  getUsersTC,
  followingTC,
} from "../../redux/reducer/UsersReducer";
import Users from "./Users";
import {
  getCurrentPage,
  getIsFetching, getIsFollowing,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from "../../redux/selectors/UsersSelectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
    }
  }

  onChangeCurrentPage = (currentPage) => {
    this.props.getUsersTC(currentPage, this.props.pageSize);
  };

  follow = (id) => {
    this.props.followingTC(id, true);
  };

  unfollow = (id) => {
    this.props.followingTC(id, false);
  };

  render() {
    return (
      <Users {...this.props}
             onChangeCurrentPage={this.onChangeCurrentPage}
             follow={this.follow}
             unfollow={this.unfollow}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  users: getUsers(state),
  currentPage: getCurrentPage(state),
  totalUsersCount: getTotalUsersCount(state),
  pageSize: getPageSize(state),
  isFetching: getIsFetching(state),
  isFollowing: getIsFollowing(state),
});

export default connect(mapStateToProps, {getUsersTC, followingTC})(UsersContainer);
