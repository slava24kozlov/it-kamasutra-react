const SET_MESSAGE = 'SET-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

export const messagesReducer = (state, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            let dialog = {
                id: 6,
                name: "Viktor",
                image: "https://html5css.ru/w3images/avatar2.png"
            }
            let message = {
                id: 6,
                message: state.newMessageText
            }
            state.dialogData.push(dialog);
            state.messagesData.push(message);
            state.newMessageText = '';
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const actionCreatorSetMessage = () => ({
    type: SET_MESSAGE
})

export const actionCreatorUpdateMessageText = (action) => ({
    type: UPDATE_MESSAGE_TEXT,
    newMessage: action
})

export default messagesReducer;