import React from 'react';
import m from './Messages.module.css';
import {NavLink} from "react-router-dom";

let dialogData = [
    {id: 1, name: "Slava"},
    {id: 2, name: "Lesha"},
    {id: 2, name: "Sveta"},
    {id: 2, name: "Vika"},
    {id: 2, name: "Tonya"}
]

let messageData = [
    {message: "Hello. How are you?"},
    {message: "How are you?"},
    {message: "I'm reading"},
    {message: "What do you do?"},
    {message: "Hello"}
]

const Dialog = (props) => {
    let path = '/messages/' + props.id;
    return <div className={m.dialog}>
        <NavLink to={path}> {props.name} </NavLink>
    </div>
}

const Message = (props) => {
    return <div>
        {props.message}
    </div>
}

let dialogElement = dialogData.map(d => <Dialog id={d.id} name={d.name}/>);
let messageElement = messageData.map(e => <Message message={e.message}/>);

const Messages = (props) => {
    return (
        <div className={m.main}>
            <div className={m.dialogs}>
                {dialogElement}
            </div>
            <div className={m.messages}>
                {messageElement}
            </div>
        </div>
    );
}

export default Messages;
