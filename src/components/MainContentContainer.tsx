import React, {lazy, Suspense} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Preloader from "./common/Preloader/Preloader";
import ProfileContainer from "./Profile/ProfileContainer";
import LoginContainer from "./Registration/LoginContainer";
import ErrorContainer from "./Error/ErrorContainer";
import PageNotFound from "./Error/PageNotFound";

const FriendsContainer = lazy(() => import("./Friends/FriendsContainer"));
const MessagesContainer = lazy(() => import("./Messages/MessagesContainer"));
const UsersContainer = lazy(() => import("./Users/UsersContainer"));
const Communities = lazy(() => import("./Communities/Communities"));
const Music = lazy(() => import("./Music/Music"));

type PropsMainContentType = {
    idAuthUser: number | null
}

const MainContent: React.FC<PropsMainContentType> = ({idAuthUser}) => {
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
                <Route path="/" element={<Navigate to={`/profile/${idAuthUser}`}/>}/>
            </Routes>
        </Suspense>
    );
};

export default MainContent;
