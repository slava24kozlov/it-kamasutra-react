import React from 'react';
import p from './Profile.module.css';
import ProfileDescription from "./ProfileDescription";
import MyPostsContainer from "./Posts/MyPostsContainer";

const Profile = () => {
    return (
        <div className={p.main}>
            <ProfileDescription/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;
