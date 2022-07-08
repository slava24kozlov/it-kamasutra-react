import React from "react";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

export function WithAuthRedirect(Component) {
    return (props) => {
        const isAuth = useSelector(state => state.authUser.isAuth);
        if (!isAuth) {
            return <Navigate to="/login" replace/>;
        }
        return <Component {...props}/>;
    };
}
