import React from 'react';
import d from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = '/messages/' + props.id;
    return <div className={d.main}>
        <NavLink to={path}> <img className={d.image} src={props.image} alt="avatar of dialog"/> {props.name} </NavLink>
    </div>
}

export default Dialog;
