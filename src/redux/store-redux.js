import {combineReducers, createStore} from 'redux'
import {profileReducer} from './reducer/ProfileReducer'
import {messagesReducer} from './reducer/MessagesReducer'
import {sidebarReducer} from './reducer/SidebarReducer'
import {usersReducer} from './reducer/UsersReducer'
import {authReducer} from "./reducer/auth-reducer";

let reducers = combineReducers({
    profilePage : profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    authUser: authReducer
})

let store = createStore(reducers);

window.store = store;

export default store;



