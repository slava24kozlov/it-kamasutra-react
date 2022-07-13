import React, {FunctionComponentElement} from "react";
import {Navigate, NavigateProps} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {getIsAuth} from "../redux/selectors/AuthSelectors";
import {getResponseIsError} from "../redux/selectors/CommonSelector";

export function WithAuthRedirect<T>(Component: React.ComponentType<T>) {
    return (props: T): React.ComponentType<T> | FunctionComponentElement<NavigateProps> => {
        const isAuth = useSelector<AppStateType, boolean>(state => getIsAuth(state));
        const isError = useSelector<AppStateType, boolean>(state => getResponseIsError(state));
        if (isError) {
            return <Navigate to="/error" replace/>;
        } else if (!isAuth) {
            return <Navigate to="/login" replace/>;
        }
        return <Component {...props}/>;
    };
}
