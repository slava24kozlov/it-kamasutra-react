import {combineReducers, createStore} from "redux";
import ProfileReducer from "./reducer/ProfileReducer";
import MessagesReducer from "./reducer/MessagesReducer";
import SidebarReducer from "./reducer/SidebarReducer";

let reducers = combineReducers({
    ProfilePage : ProfileReducer,
    MessagesPage: MessagesReducer,
    sidebar: SidebarReducer
})

let store = createStore(reducers);

export default store;



