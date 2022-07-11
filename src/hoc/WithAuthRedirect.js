import React from "react";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

export function WithAuthRedirect(Component) {
    return (props) => {
        const isAuth = useSelector(state => state.authUser.isAuth);
        const isError = useSelector(state => state.common.error.isError);
        if (!isAuth) {
            return <Navigate to="/login" replace/>;
        } else if (isError) {
            return <Navigate to="/error" replace/>;
        }
        return <Component {...props}/>;
    };
}
