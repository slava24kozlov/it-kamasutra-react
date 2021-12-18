import React from 'react';
import f from './Friends.module.css';
import FriendElement from "./FriendElement";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";

const Friends = (props) => {
    let friendsElement = props.friendsBar.map(f => <FriendElement key={f.name} name={f.name} image={f.image}/>);
    return (
        <div className={f.main}>
            {friendsElement}
        </div>
    );
}

const mapStateToProps = (state) => ({
    friendsBar: state.sidebar.FriendsBar,
    isAuthUser: state.authUser.isAuth,
})

export default compose(connect(mapStateToProps), withAuthRedirect)(Friends);
