import React from 'react';
import style from './ProfileInfo.module.scss';
import imageUser from '../../../image/photoUser.png'
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  return (
    <div className={style.profile}>
      <img src={props.profile?.photos.small ?? imageUser} alt='profile avatar'/>
      <ul>
        <li><b>Name: </b>{props.profile?.fullName}</li>
        <li><b>About me: </b>{props.profile?.aboutMe}</li>
        <li><i>Looking for Job: </i>{props.profile?.lookingForAJob ? 'Yes' : 'No'}</li>
        <li><i>Description: </i>{props.profile?.lookingForAJobDescription}</li>
      </ul>
      <ProfileStatus
        status={props.status}
        onChangeStatus={props.onChangeStatus}
        isAuthProfile={props.isAuthProfile}
      />
    </div>
  )
}

export default ProfileInfo;