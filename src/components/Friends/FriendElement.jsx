import React from 'react';
import fe from './FriendElement.module.css';

const FriendElement = (props) => {
    return (
        <div className={fe.main}>
            <div className={fe.imageFriend}>
                <img src={props.image} alt="avatar friend"/>
            </div>
            <div className={fe.nameFriend}>
                {props.name}
            </div>
        </div>
    );
}

export default FriendElement;
