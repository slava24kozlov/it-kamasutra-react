import React from 'react';
import p from './Profile.module.css';
import MyPosts from './Posts/MyPosts';
import ProfileDescription from "./ProfileDescription";

const Profile = () => {
    return (
        <div className={p.main}>
            <ProfileDescription/>
            <MyPosts/>
        </div>
    )
}

export default Profile;
