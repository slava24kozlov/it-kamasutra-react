import ProfileReducer from './reducer/ProfileReducer';
import MessagesReducer from './reducer/MessagesReducer';
import SidebarReducer from './reducer/SidebarReducer';

let storeManual = {
    _state: {
        ProfilePage: {
            postData: [
                {message: "This is my first post", author: "Slava Nelson", like: 23},
                {message: "My favorite actor is Will Smith", author: "Vlad Lenon", like: 5},
                {message: "It's page of animals", author: "Len Name", like: 10}
            ],
            newPostText: 'Enter new post',
            newCountLike: 0
        },
        MessagesPage: {
            dialogData: [
                {id: 1, name: "Slava", image: "https://html5css.ru/w3images/avatar2.png"},
                {
                    id: 2,
                    name: "Lesha",
                    image: "data:image/jpeg;base64,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"
                },
                {
                    id: 3,
                    name: "Sveta",
                    image: "data:image/jpeg;base64,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"
                },
                {id: 4, name: "Vika", image: "https://html5css.ru/w3images/avatar2.png"},
                {id: 5, name: "Tonya", image: "https://html5css.ru/howto/img_avatar2.png"}
            ],
            messagesData: [
                {id: 1, message: "Hello. How are you?"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "I'm reading"},
                {id: 4, message: "What do you do?"},
                {id: 5, message: "Hello"}
            ],
            newMessageText: 'Enter message'
        },
        sidebar: {
            FriendsBar: [
                {
                    name: "Name 1",
                    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dwayne-johnson-attends-the-premiere-of-universal-pictures-news-photo-1161880409-1566504158.jpg?crop=0.762xw:0.654xh;0.0698xw,0.0141xh&resize=480:*"
                },
                {
                    name: "Name 2",
                    image: "https://www.thehealthy.com/wp-content/uploads/2019/11/shutterstock_editorial_10323173cg-1.jpg"
                },
                {
                    name: "Name 3",
                    image: "data:image/jpeg;base64,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"
                }
            ]
        }
    },
    _callSubscriber() {
        console.log('no subscribers(observers)');
    },

    getState() {
        return this._state;
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.ProfilePage = ProfileReducer(this._state.ProfilePage, action);
        this._state.MessagesPage = MessagesReducer(this._state.MessagesPage, action);
        this._state.sidebar = SidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default storeManual;

