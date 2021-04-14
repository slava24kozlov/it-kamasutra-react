import React from 'react';
import pd from './ProfileDescription.module.css';

const ProfileDescription = () => {
    return (
        <div className={pd.main}>
            <img
                src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                alt="main image of profile"/>
            <div className={pd.description}>
                <p>Avatar + Description</p>
            </div>
        </div>
    )
}

export default ProfileDescription;