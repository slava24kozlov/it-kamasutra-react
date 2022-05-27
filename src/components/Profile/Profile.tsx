import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Posts/MyPostsContainer";
import Wrapper from "../common/Wrappers/WrapperComponents";
import {PropsTypeContainer} from "./ProfileContainer";

type PropsType = {
    profile: PropsTypeContainer["profile"]
    status: PropsTypeContainer["status"]
    onChangeStatus: (status: string) => void
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <Wrapper title="PROFILE">
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </Wrapper>
    );
};

export default Profile;
