import {connect} from "react-redux";
import {
  followAC, isFetchingUsersAC, isFollowingUsersAC, setCurrentPageAC,
  setTotalUsersCountAC, setUsersAC, unfollowAC
} from "../../redux/reducer/UsersReducer";
import React from "react";
import Users from "./Users";
import usersAPI from "../../api/usersAPI";


class UsersContainer extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.isFetchingUsersAC(true)
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        .then(data => {
            this.props.setUsersAC(data.items)
            this.props.setTotalUsersCountAC(data.totalCount)
          }
        )
      this.props.isFetchingUsersAC(false)
    }
  }

  onChangeCurrentPage = (currentPage) => {
    this.props.setCurrentPageAC(currentPage)
    this.props.setUsersAC([])
    this.props.isFetchingUsersAC(true)
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.setUsersAC(data.items)
      })
    this.props.isFetchingUsersAC(false)
  }

  follow = (id) => {
    this.props.isFollowingUsersAC(id)
    usersAPI.follow(id).then(result => {
      result === 0 && this.props.followAC(id)
    })

  }

  unfollow = (id) => {
    this.props.isFollowingUsersAC(id)
    usersAPI.unfollow(id).then(result => {
      result === 0 && this.props.unfollowAC(id)
    })

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
  isFollowing: state.usersPage.isFollowing
})

export default connect(mapStateToProps,
  {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, isFetchingUsersAC, isFollowingUsersAC})
(UsersContainer)