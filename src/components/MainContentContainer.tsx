import React, {lazy, Suspense} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import Preloader from "./common/Preloader/Preloader";
import PageNotFound from "./Error/PageNotFound";

const LoginContainer = lazy(() => import("./Registration/LoginContainer"));
// @ts-ignore
const ProfileContainer = lazy(() => import("./Profile/ProfileContainer"));
const FriendsContainer = lazy(() => import("./Friends/FriendsContainer"));
const MessagesContainer = lazy(() => import("./Messages/MessagesContainer"));
const UsersContainer = lazy(() => import("./Users/UsersContainer"));
const Communities = lazy(() => import("./Communities/Communities"));
const Music = lazy(() => import("./Music/Music"));
const ErrorContainer = lazy(() => import("./Error/ErrorContainer"));

type PropsMainContentType = {
    isAuthUser: boolean
    idAuthUser: number | null
}

const MainContent: React.FC<PropsMainContentType> = ({isAuthUser, idAuthUser}) => {
    const navigation = useNavigate();

   /* if (isAuthUser) {
       navigation(`/profile/${idAuthUser}`, {replace: true});
    } else {
        navigation("/login");
    }*/

    return (
        <Suspense fallback={<Preloader entire/>}>
            <Routes>
                <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                <Route path="/friends" element={<FriendsContainer/>}/>
                <Route path="/messages" element={<MessagesContainer/>}/>
                <Route path="/users" element={<UsersContainer/>}/>
                <Route path="/communities" element={<Communities/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/login" element={<LoginContainer/>}/>
                <Route path="/error" element={<ErrorContainer/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </Suspense>
    );
};

export default MainContent;
