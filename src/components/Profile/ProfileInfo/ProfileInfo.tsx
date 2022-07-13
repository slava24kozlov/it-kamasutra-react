import React from "react";
import style from "./ProfileInfo.module.scss";
import imageUser from "../../../image/photoUser.png";
import ProfileStatus from "./ProfileStatus";
import {InitialStateType} from "../../../redux/reducer/ProfileReducer";
import {ProfileType} from "../../../api/profileAPI";

type ProfileInfoType = {
    data: ProfileType
    status: InitialStateType["status"]
    onChangeStatus: (status: string) => void
    isAuthProfile: boolean
}

const ProfileInfo: React.FC<ProfileInfoType> = ({
                                                    data: {
                                                        photos,
                                                        fullName,
                                                        aboutMe,
                                                        lookingForAJob,
                                                        lookingForAJobDescription,
                                                        contacts
                                                    }, status, onChangeStatus, isAuthProfile
                                                }) => {
    return (
        <div className={style.profile}>
            <img src={photos.small ?? imageUser} alt="profile avatar"/>
            <ul>
                <li><b>Name: </b>{fullName}</li>
                {aboutMe && <li><b>About: </b>{aboutMe}</li>}
                <li><b>Looking for Job: </b>{lookingForAJob ? "Yes" : "No"}</li>
                {lookingForAJobDescription &&
                    <li><b>Description: </b>{lookingForAJobDescription}</li>}
                <li><i>Contacts:</i></li>
                <ul>
                    {Object.entries(contacts).map(([name, value]) => (
                        <li key={name}><b>{name}: </b>{value}</li>
                    ))}
                </ul>
            </ul>
            <ProfileStatus
                status={status}
                onChangeStatus={onChangeStatus}
                isAuthProfile={isAuthProfile}
            />
        </div>
    );
};

export default ProfileInfo;
