import React from "react";
import style from "./Preloader.module.scss";

type PropsPreloaderType = {
    entire?: boolean
}

const Preloader: React.FC<PropsPreloaderType> = ({entire}) => (
    <div aria-label="page preloader" className={`${style.main} ${entire && style.entire}`}>
        <div className={style.content}/>
    </div>
);

export default Preloader;
