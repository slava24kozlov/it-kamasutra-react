import React, {lazy, Suspense} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {compose} from "redux";
import {getAuthId, getIsAuth} from "../redux/selectors/AuthSelectors";
import {connect, ConnectedProps} from "react-redux";
import {withAuthRedirect} from "../hoc/AuthRedirect";
import {AppStateType} from "../redux/store";
import Preloader from "./common/Preloader/Preloader";

const ProfileContainer = lazy(() => import("./Profile/ProfileContainer"));
const FriendsContainer = lazy(() => import("./Friends/FriendsContainer"));
const MessagesContainer = lazy(() => import("./Messages/MessagesContainer"));
const UsersContainer = lazy(() => import("./Users/UsersContainer"));
const Communities = lazy(() => import("./Communities/Communities"));
const Music = lazy(() => import("./Music/Music"));

const MainContent = (props: PropsFromRedux) => (
    <Suspense fallback={<Preloader/>}>
        <Routes>
            <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
            <Route path="/friends" element={<FriendsContainer/>}/>
            <Route path="/messages" element={<MessagesContainer/>}/>
            <Route path="/users" element={<UsersContainer/>}/>
            <Route path="/communities" element={<Communities/>}/>
            <Route path="/music" element={<Music/>}/>
            <Route path="/" element={<Navigate to={`/profile/${props.idAuthUser}`} replace/>}/>
        </Routes>
    </Suspense>
);

const mapStateToProps = (state: AppStateType) => ({
    isAuthUser: getIsAuth(state),
    idAuthUser: getAuthId(state),
});

const connector = connect(mapStateToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>

export default compose(connector, withAuthRedirect)(MainContent);
