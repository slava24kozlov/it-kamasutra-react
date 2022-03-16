import {connect} from "react-redux";
import {
  getUsersTC,
  followingTC,
} from "../../redux/reducer/UsersReducer";
import React from "react";
import Users from "./Users";
import {FOLLOW, UNFOLLOW} from "../../redux/action-type";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";
import {
  getCurrentPage,
  getIsFetching, getIsFollowing,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from "../../redux/selectors/UsersSelectors";
import {getIsAuth} from "../../redux/selectors/AuthSelectors";


class UsersContainer extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }
  }

  onChangeCurrentPage = (currentPage) => {
    this.props.getUsersTC(currentPage, this.props.pageSize)
  }

  follow = (id) => {
    this.props.followingTC(FOLLOW, id)
  }

  unfollow = (id) => {
    this.props.followingTC(UNFOLLOW, id)
  }

  render() {
    return <>
      <Users
        users={this.props.users}
        currentPage={this.props.currentPage}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        isFetching={this.props.isFetching}
        isFollowing={this.props.isFollowing}
        follow={this.follow}
        unfollow={this.unfollow}
        onChangeCurrentPage={this.onChangeCurrentPage}
      />
    </>
  }
}

let mapStateToProps = (state) => ({
  users: getUsers(state),
  currentPage: getCurrentPage(state),
  totalUsersCount: getTotalUsersCount(state),
  pageSize: getPageSize(state),
  isFetching: getIsFetching(state),
  isFollowing: getIsFollowing(state),
  isAuthUser: getIsAuth(state)
})

export default connect(mapStateToProps, {getUsersTC, followingTC})(UsersContainer);