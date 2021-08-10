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
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.isFetchingUsersAC(false)
                this.props.setUsersAC(response.data.items)
            })
    }

    render() {
        return <>
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                isFetching={this.props.isFetching}
                onChangeCurrentPage={this.onChangeCurrentPage}
                unfollow={this.props.unfollowAC}
                follow={this.props.followAC}
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


