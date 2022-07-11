import React from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/store";

export function withAuthRedirect<T>(Component: React.ComponentType<T>) {
    return (props: T) => {
        const isAuth = useSelector<AppStateType, boolean>(state => state.authUser.isAuth);
        if (isAuth) {
            return <Navigate to="/login" replace/>;
        }
        return <Component {...props}/>;
    };
}

/*
export const withAuthRedirect = (Component) => {
  return class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuthUser) {
        return <Redirect to='/login'/>
      }
      return <Component {...this.props}/>
    }
  }
}*/
