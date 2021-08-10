import React from 'react';
import axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfileAC} from "../../redux/reducer/ProfileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let matchProfile = this.props.match.params.userId
        if (!matchProfile){
            matchProfile = 2
        }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + matchProfile).then(response => {
            this.props.setProfileAC(response.data)
        })
        debugger
    }

    render() {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let profileContainerWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setProfileAC})(profileContainerWithRouter)




