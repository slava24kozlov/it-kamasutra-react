import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/reducer/UsersReducer";


let mapStateToProps = (state) => ({
    users: state.usersPage.users
})

let mapDispatchToProps = (dispatch) => ({
    follow: (userId) => {
        dispatch(followAC(userId))
    },
    unfollow: (userId) => {
        dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users))
    }
})

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer


