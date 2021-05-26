import {combineReducers, createStore} from 'redux'
import ProfileReducer from './reducer/ProfileReducer'
import MessagesReducer from './reducer/MessagesReducer'
import SidebarReducer from './reducer/SidebarReducer'
import UsersReducer from './reducer/UsersReducer'

let reducers = combineReducers({
    profilePage : ProfileReducer,
    messagesPage: MessagesReducer,
    usersPage: UsersReducer,
    sidebar: SidebarReducer
})

let store = createStore(reducers);

export default store;



