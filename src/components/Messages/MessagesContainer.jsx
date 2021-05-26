import React from 'react';
import {actionCreatorSetMessage, actionCreatorUpdateMessageText} from '../../redux/reducer/MessagesReducer';
import {connect} from "react-redux";
import Messages from "./Messages";


let mapStateToProps = (state) => (
    {
        dialogData: state.messagesPage.dialogData,
        messagesData: state.messagesPage.messagesData,
        newMessageText: state.messagesPage.newMessageText
    }
)

let mapDispatchToProps = (dispatch) => (
    {
        addMessage: () => {
            dispatch(actionCreatorSetMessage())
        },
        updateMessageText: (value) => {
            dispatch(actionCreatorUpdateMessageText(value))
        }
    }
)

let MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer


