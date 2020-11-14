import React from 'react';
import m from './Messages.module.css';
import Dialog from "./components/Dialog";
import Message from "./components/Message";

const Messages = (props) => {
    let dialogElement = props.state.dialogData.map(d => <Dialog id={d.id} name={d.name} image={d.image}/>);
    let messageElement = props.state.messagesData.map(e =><Message id={e.id} message={e.message}/>);
    let textarea = React.createRef();
    let addMessage = () => {
        let newMessage = textarea.current.value;
        {props.addMessage(newMessage)}
        textarea.current.value = '';
    }

    return (
        <div className={m.main}>
            <div className={m.dialogs}>
                {dialogElement}
            </div>
            <div className={m.messages}>
                {messageElement}
            </div>
            <textarea ref={textarea}>Enter words</textarea>
            <button onClick={addMessage}>Click</button>
        </div>
    );
}

export default Messages;
