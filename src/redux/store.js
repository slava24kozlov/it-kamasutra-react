import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from "redux-thunk";
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;



