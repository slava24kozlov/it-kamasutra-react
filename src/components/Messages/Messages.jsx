import React from 'react';
import m from './Messages.module.css';
import Dialog from "./components/Dialog";
import Message from "./components/Message";

const Messages = (props) => {
    let dialogElement = props.dialogData.map(d => <Dialog id={d.id} name={d.name} image={d.image}/>);
    let messageElement = props.messagesData.map(e => <Message id={e.id} message={e.message}/>);
    let linkMessage = React.createRef();

    return (
        <div className={m.main}>
            <div className={m.dialogs}>
                {dialogElement}
            </div>
            <div className={m.messages}>
                {messageElement}
            </div>
            <textarea ref={linkMessage}
                      onChange={() => props.updateMessageText(linkMessage.current.value)}
                      value={props.newMessageText}/>
            <button onClick={props.addMessage}>Click</button>
        </div>
    );
}

export default Messages;
