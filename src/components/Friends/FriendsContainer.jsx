import React from 'react';
import f from './Friends.module.css';
import FriendElement from "./FriendElement";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";
import {getFriends} from "../../redux/selectors/SidebarSelectors";
import {getIsAuth} from "../../redux/selectors/AuthSelectors";

const Friends = (props) => {
    let friendsElement = props.friendsBar.map(f => <FriendElement key={f.name} name={f.name} image={f.image}/>);
    return (
        <div className={f.main}>
            {friendsElement}
        </div>
    );
}

const mapStateToProps = (state) => ({
    friendsBar: getFriends(state),
    isAuthUser: getIsAuth(state),
})

export default compose(connect(mapStateToProps), withAuthRedirect)(Friends);
