import React from 'react'
import {useSelector} from "react-redux";

const Login = () => {
  const isAuthUser = useSelector(state => state.authUser.isAuth)
  return (
    <div style={{marginLeft: '5px', fontStyle: 'italic'}}>
      <h1>You must log in</h1>
      <p>{`isAuthUser: ${isAuthUser}`}</p>
    </div>
  )
}

export default Login