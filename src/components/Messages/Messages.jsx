import React from 'react';
import m from './Messages.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = '/messages/' + props.id;
    return <div className={m.dialog + m.active}>
        <NavLink to={path}> {props.name} </NavLink>
    </div>
}

const Message = (props) => {
    return <div className={m.message}>
        {props.message}
    </div>
}

const Messages = (props) => {
    return (
        <div className={m.main}>
            <div className={m.dialogs}>
                <Dialog id="1" name="Slava"/>
                <Dialog id="2" name="Lesha"/>
                <Dialog id="3" name="Vika"/>
            </div>
            <div className={m.messages}>
                <Message message="Hello. How are you?"/>
                <Message message="What is the notebook?"/>
                <Message message="OK, all right"/>
            </div>
        </div>
    );
}

export default Messages;
