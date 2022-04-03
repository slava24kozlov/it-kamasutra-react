import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from "redux-thunk";
import {profileReducer} from './reducer/ProfileReducer'
import {messagesReducer} from './reducer/MessagesReducer'
import {sidebarReducer} from './reducer/SidebarReducer'
import {usersReducer} from './reducer/UsersReducer'
import {authReducer} from "./reducer/AuthReducer";
import {loginReducer} from "./reducer/LoginReducer";

let rootReducers = combineReducers({
    profilePage : profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    authUser: authReducer,
    loginUser: loginReducer,
})

type RootReducerType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducerType>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;



