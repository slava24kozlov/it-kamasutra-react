import React from 'react';
import p from './Profile.module.css';
import MyPosts from './Posts/MyPosts';

const Profile = () => {
    return (
        <div className={p.profile}>
            <div>
                <img
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                    alt="main image of profile"/>
            </div>
            <div>
                Avatar + Description
            </div>
            <MyPosts />
        </div>
    );
};

export default Profile;
