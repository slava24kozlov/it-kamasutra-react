import React from "react";
import preloader from '../../../image/preloaderUsers.svg';
import style from './Preloader.module.css';

const Preloader = () => {
    return <div className={style.main}>
        <img src={preloader} alt='preloader-svg'/>
    </div>
}

export default Preloader;