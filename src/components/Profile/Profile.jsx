import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Posts/MyPostsContainer";
import Wrapper from "../common/Wrappers/WrapperComponents";

const Profile = (props) => {
    return (
        <Wrapper title="PROFILE">
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </Wrapper>
    );
};

export default Profile;