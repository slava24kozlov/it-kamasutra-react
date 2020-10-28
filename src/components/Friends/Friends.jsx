import React from 'react';
import f from './Friends.module.css';
import FriendElement from "./FriendElement";

const Friends = (props) => {
    let friendsElement = props.state.FriendsBar.map(f => <FriendElement name={f.name} image={f.image}/>);
    return (
        <div className={f.main}>
            {friendsElement}
        </div>
    );
}

export default Friends;
