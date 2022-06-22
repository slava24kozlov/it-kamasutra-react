import React, {lazy} from "react";
import {Route, Navigate} from "react-router-dom";

const LoginContainer = lazy(() => import("../components/Registration/LoginContainer"));

export const withAuthRedirect = (Component) => (props) => {
    if (!props.isAuthUser) {
        return (
            <>
                <LoginContainer/>
                <Route path="/" element={<Navigate to="/login" replace/>}/>
            </>
        );
    }
    return <Component {...props}/>;
};

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
