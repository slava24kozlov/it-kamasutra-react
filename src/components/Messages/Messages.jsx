import React from 'react';
import m from './Messages.module.css';
import Dialog from "./components/Dialog";
import Message from "./components/Message";

const Messages = (props) => {
    let dialogElement = props.messagesPage.dialogData.map(d => <Dialog id={d.id} name={d.name} image={d.image}/>);
    let messageElement = props.messagesPage.messagesData.map(e =><Message id={e.id} message={e.message}/>);
    let textarea = React.createRef();

    let addMessage = () => {
        props.setMessage(textarea.current.value)
    }

    let updateMessage = () => {
        props.updateMessageText(textarea.current.value);
    }

    return (
        <div className={m.main}>
            <div className={m.dialogs}>
                {dialogElement}
            </div>
            <div className={m.messages}>
                {messageElement}
            </div>
            <textarea ref={textarea} onClick={updateMessage} value={props.newMessageText}/>
            <button onClick={addMessage}>Click</button>
        </div>
    );
}

export default Messages;
