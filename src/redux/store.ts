import {Action, AnyAction, applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk, {ThunkAction} from "redux-thunk";
import {profileReducer} from "./reducer/ProfileReducer";
import {messagesReducer} from "./reducer/MessagesReducer";
import {sidebarReducer} from "./reducer/SidebarReducer";
import {usersReducer} from "./reducer/UsersReducer";
import {authReducer} from "./reducer/AuthReducer";
import {loginReducer} from "./reducer/LoginReducer";
import {commonReducer} from "./reducer/CommonReducer";

const rootReducers = combineReducers({
    common: commonReducer,
    profilePage : profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    authUser: authReducer,
    loginUser: loginReducer,
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;

export type AppStateType = ReturnType<typeof rootReducers>

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsType<T extends {[key: string]: (...args: Array<any>) => Record<string, unknown>}> = ReturnType<PropertiesTypes<T>>

export type ThunkCreator<A extends Action = AnyAction, R = void> = ThunkAction<R, AppStateType, unknown, A>



