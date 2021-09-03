import React from 'react';
import style from './ProfileInfo.module.scss';
import imageUser from '../../image/photoUser.png'

const ProfileInfo = (props) => {
  return (
    <div className={style.main}>
      <div className={style.head}>
        <span>Profile</span>
      </div>
      <div className={style.profile}>
        <img src={props.profile?.photos.small ?? imageUser}
             alt='profile avatar'/>
        <div className={style.profileDescription}>
          {props.profile
            ?
            <>
              <p><b>Name: </b>{props.profile.fullName}</p>
              <p><b>About me: </b>{props.profile.aboutMe}</p>
              <p><i>Looking for Job: </i>{props.profile.lookingForAJob ? 'Yes' : 'No'}</p>
              <p><i>Description: </i>{props.profile.lookingForAJobDescription}</p>
            </>
            :
            <p className={style.informationText}>You must sign up</p>
          }
        </div>
      </div>
    </div>)
}

export default ProfileInfo;