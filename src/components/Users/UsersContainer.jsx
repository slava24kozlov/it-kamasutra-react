import {connect} from "react-redux";
import {
  followAC, isFetchingUsersAC, setCurrentPageAC,
  setTotalUsersCountAC, setUsersAC, unfollowAC
} from "../../redux/reducer/UsersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.isFetchingUsersAC(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
        withCredentials: true
      })
        .then(response => {
            this.props.isFetchingUsersAC(false)
            this.props.setUsersAC(response.data.items)
            this.props.setTotalUsersCountAC(response.data.totalCount)
          }
        )
    }
  }

  onChangeCurrentPage = (currentPage) => {
    this.props.setCurrentPageAC(currentPage)
    this.props.setUsersAC([])
    this.props.isFetchingUsersAC(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`, {
      withCredentials: true
    })
      .then(response => {
        this.props.isFetchingUsersAC(false)
        this.props.setUsersAC(response.data.items)
      })
  }

  follow = (id) => {
    axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + id, {}, {
      withCredentials: true,
      headers: {'API-KEY': 'b9d1e421-196c-4a79-b87a-b6c343077786'}
    }).then(response => {
        response.data.resultCode === 0 && this.props.followAC(id)
      }
    )
  }

  unfollow = (id) => {
    axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + id, {
      withCredentials: true,
      headers: {'API-KEY': 'b9d1e421-196c-4a79-b87a-b6c343077786'}
    }).then(response => {
      response.data.resultCode === 0 && this.props.unfollowAC(id)
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
  isFetching: state.usersPage.isFetching
})

export default connect(mapStateToProps,
  {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, isFetchingUsersAC})
(UsersContainer)


/*let mapDispatchToProps = (dispatch) => ({
    follow: (userId) => {
        dispatch(followAC(userId))
    },
    unfollow: (userId) => {
        dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users))
    },
    setCurrentPage: (currentPage) => {
        dispatch(setCurrentPageAC(currentPage))
    },
    setTotalUsersCount: (totalUsersCount) => {
        dispatch(setTotalUsersCountAC(totalUsersCount))
    },
    isFetchingUsers: (isFetching) => {
        dispatch(isFetchingUsers(isFetching))
    }
})*/


