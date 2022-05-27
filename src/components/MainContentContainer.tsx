import React, {lazy, Suspense} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {compose} from "redux";
import {getAuthId, getIsAuth} from "../redux/selectors/AuthSelectors";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../redux/store";
import Preloader from "./common/Preloader/Preloader";

const LoginContainer = lazy(() => import("./Registration/LoginContainer"));
// @ts-ignore
const ProfileContainer = lazy(() => import("./Profile/ProfileContainer"));
const FriendsContainer = lazy(() => import("./Friends/FriendsContainer"));
const MessagesContainer = lazy(() => import("./Messages/MessagesContainer"));
const UsersContainer = lazy(() => import("./Users/UsersContainer"));
const Communities = lazy(() => import("./Communities/Communities"));
const Music = lazy(() => import("./Music/Music"));

export type PropsFromRedux = ConnectedProps<typeof connector>
type PropsType = PropsFromRedux & {
    isAuth: boolean
}

const MainContent = (props: PropsType) => {
    return (
        <Suspense fallback={<Preloader/>}>
            <Routes>
                <Route path="/login" element={<LoginContainer/>}/>
                <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                <Route path="/friends" element={<FriendsContainer/>}/>
                <Route path="/messages" element={<MessagesContainer/>}/>
                <Route path="/users" element={<UsersContainer/>}/>
                <Route path="/communities" element={<Communities/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="*" element={<Navigate to={props.isAuth ? `/profile/${props.idAuthUser}` : "/login"}/>}/>
            </Routes>
        </Suspense>
    );
};

const mapStateToProps = (state: AppStateType) => ({
    isAuthUser: getIsAuth(state),
    idAuthUser: getAuthId(state),
});

const connector = connect(mapStateToProps);
export default compose(connector)(MainContent);
