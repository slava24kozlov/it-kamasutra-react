import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Posts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo {...props}/>
            <MyPostsContainer isAuthProfile={props.isAuthProfile}/>
        </div>
    )
}

export default Profile;