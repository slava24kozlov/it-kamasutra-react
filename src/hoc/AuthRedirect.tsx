import React, { lazy } from 'react'
import {Redirect} from "react-router-dom";
import {PropsFromRedux} from "../components/MainContentContainer";
const LoginContainer = lazy(() => import("../components/Registration/LoginContainer"))

export const withAuthRedirect = (Component: React.ComponentType<PropsFromRedux>) => (props: PropsFromRedux) => {
  if (!props.isAuthUser) {
    return (
      <>
        <LoginContainer/>
        <Redirect to="/login"/>
      </>
    )
  }
  return <Component {...props}/>
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
