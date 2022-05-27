import React, {lazy} from "react";
import {Navigate, Route} from "react-router-dom";
import {PropsFromRedux} from "../components/MainContentContainer";

const LoginContainer = lazy(() => import("../components/Registration/LoginContainer"));

export const withAuthRedirect = (Component: React.ComponentType<PropsFromRedux>) => (props: PropsFromRedux): React.ReactElement => {
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
