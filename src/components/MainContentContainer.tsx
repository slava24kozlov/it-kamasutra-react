import React, {lazy, Suspense} from "react";
import {Redirect, Route, useLocation} from "react-router-dom";
import {compose} from "redux";
import {getAuthId, getIsAuth} from "../redux/selectors/AuthSelectors";
import {connect, ConnectedProps} from "react-redux";
import {withAuthRedirect} from "../hoc/AuthRedirect";
import {AppStateType} from "../redux/store";
import Preloader from "./common/Preloader/Preloader";

const ProfileContainer = lazy(() => import("./Profile/ProfileContainer"))
const FriendsContainer = lazy(() => import("./Friends/FriendsContainer"))
const MessagesContainer = lazy(() => import("./Messages/MessagesContainer"))
const UsersContainer = lazy(() => import("./Users/UsersContainer"))
const Communities = lazy(() => import("./Communities/Communities"))
const Music = lazy(() => import("./Music/Music"))

const MainContent = (props: PropsFromRedux) => {
    const currentURL = useLocation().pathname
    if (currentURL !== sessionStorage.getItem("currentURL") && currentURL !== "/login") {
        sessionStorage.setItem("currentURL", currentURL)
    }

    return (
        <Suspense fallback={<Preloader/>}>
            <Route path='/profile/:userId?' render={() =>
                <ProfileContainer/>}/>
            <Route path='/friends' render={() =>
                <FriendsContainer/>}/>
            <Route path='/messages' render={() =>
                <MessagesContainer/>}/>
            <Route path='/users' render={() =>
                <UsersContainer/>}/>
            <Route path='/communities' component={Communities}/>
            <Route path='/music' component={Music}/>
            <Redirect from='/'
                      to={sessionStorage.getItem("currentURL") as string | null ? sessionStorage.getItem("currentURL") as string : `/profile/${props.idAuthUser}`}/>
        </Suspense>
    )

}

const mapStateToProps = (state: AppStateType) => ({
    isAuthUser: getIsAuth(state),
    idAuthUser: getAuthId(state),
})

const connector = connect(mapStateToProps)
export type PropsFromRedux = ConnectedProps<typeof connector>

export default compose(connector, withAuthRedirect)(MainContent)
