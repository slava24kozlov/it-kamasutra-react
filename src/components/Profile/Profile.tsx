import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Posts/MyPostsContainer";
import Wrapper from "../common/Wrappers/WrapperComponents";
import {InitialStateType} from "../../redux/reducer/ProfileReducer";
import Preloader from "../common/Preloader/Preloader";

export type PropsProfileType = {
    profile: InitialStateType["profile"]["data"]
    status: InitialStateType["status"]
    isFetchingProfile: boolean
    onChangeStatus: (status: string) => void
    isAuthProfile: boolean
}

const Profile: React.FC<PropsProfileType> = ({profile, status, isFetchingProfile, isAuthProfile, onChangeStatus}) => {
    return (
        <Wrapper title="PROFILE">
            {(profile && !isFetchingProfile) ?
                <>
                    <ProfileInfo data={profile}
                                 status={status}
                                 isAuthProfile={isAuthProfile}
                                 onChangeStatus={onChangeStatus}/>
                    {isAuthProfile && <MyPostsContainer/>}
                </>
                : <Preloader/>}
        </Wrapper>
    );
};

export default Profile;
