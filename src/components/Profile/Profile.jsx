import React from 'react';
import p from './Profile.module.css';
import MyPosts from './Posts/MyPosts';
import ProfileDescription from "./ProfileDescription";

const Profile = (props) => {
    return (
        <div className={p.main}>
            <ProfileDescription/>
            <MyPosts posts={props.profilePage.postData}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;
