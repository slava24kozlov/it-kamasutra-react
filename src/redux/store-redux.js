import {combineReducers, createStore} from 'redux'
import {profileReducer} from './reducer/ProfileReducer'
import {messagesReducer} from './reducer/MessagesReducer'
import {sidebarReducer} from './reducer/SidebarReducer'
import {usersReducer} from './reducer/UsersReducer'

let reducers = combineReducers({
    profilePage : profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer
})

let store = createStore(reducers);

export default store;



