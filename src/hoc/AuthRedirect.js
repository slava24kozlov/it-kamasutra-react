import React from 'react'
import LoginContainer from "../components/Registration/LoginContainer";

export const withAuthRedirect = (Component) => (props) => {
  if (!props.isAuthUser) {
    return <LoginContainer/>
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
