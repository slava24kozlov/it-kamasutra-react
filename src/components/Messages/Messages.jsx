import React from 'react';
import m from './Messages.module.css';
import Dialog from "./components/Dialog";
import Message from "./components/Message";
import {actionCreatorSetMessage, actionCreatorUpdateMessageText} from '../../redux/reducer/MessagesReducer';

const Messages = (props) => {
    let dialogElement = props.messagesPage.dialogData.map(d => <Dialog id={d.id} name={d.name} image={d.image}/>);
    let messageElement = props.messagesPage.messagesData.map(e =><Message id={e.id} message={e.message}/>);
    let linkMessage = React.createRef();

    let addMessage = () => {
        props.dispatch(actionCreatorSetMessage())
    }

    let updateMessageText = () => {
        props.dispatch(actionCreatorUpdateMessageText(linkMessage.current.value));
    }

    return (
        <div className={m.main}>
            <div className={m.dialogs}>
                {dialogElement}
            </div>
            <div className={m.messages}>
                {messageElement}
            </div>
            <textarea ref={linkMessage} onChange={updateMessageText} value={props.messagesPage.newMessageText}/>
            <button onClick={addMessage}>Click</button>
        </div>
    );
}

export default Messages;
