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


class UsersContainer extends React.Component {
  componentDidMount() {
    console.log(this.props.isAuthUser)
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
  users: state.usersPage.users,
  currentPage: state.usersPage.currentPage,
  totalUsersCount: state.usersPage.totalUsersCount,
  pageSize: state.usersPage.pageSize,
  isFetching: state.usersPage.isFetching,
  isFollowing: state.usersPage.isFollowing,
  isAuthUser: state.authUser.isAuth
})

export default compose(
  connect(mapStateToProps, {getUsersTC, followingTC}), withAuthRedirect)
(UsersContainer)