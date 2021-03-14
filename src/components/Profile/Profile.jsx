import React from 'react';
import p from './Profile.module.css';
import MyPosts from './Posts/MyPosts';
import ProfileDescription from "./ProfileDescription";

const Profile = (props) => {
    return (
        <div className={p.main}>
            <ProfileDescription/>
            <MyPosts profilePage={props.profilePage}
                     dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;
