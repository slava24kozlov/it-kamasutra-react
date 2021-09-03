import React from 'react';
import f from './Friends.module.css';
import FriendElement from "./FriendElement";
import store from '../../redux/store';

const Friends = () => {
    let state = store.getState().sidebar;
    let friendsElement = state.FriendsBar.map(f => <FriendElement name={f.name} image={f.image}/>);
    return (
        <div className={f.main}>
            {friendsElement}
        </div>
    );
}

export default Friends;
