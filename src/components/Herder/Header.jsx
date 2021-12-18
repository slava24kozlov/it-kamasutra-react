import React from 'react';
import logotype from '../../logo.svg';
import style from './Headers.module.scss';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={style.main}>
      <NavLink to={props.isAuthUser ? `/profile/${props.idAuthUser}` : '/profile'}>
        <img src={logotype} alt="header"/>
      </NavLink>
      <p className={style.textHead}>THE PAGE IS TEST LESSON OF IT</p>
      <div className={style.login}>
        {props.isAuthUser
          ? <p>{props.loginAuthUser}</p>
          : <NavLink to='/login'><button>Log in</button></NavLink>}
        {props.isAuthUser && <button style={{fontWeight: "bold"}} onClick={() => props.loginOutUserTC(props.rememberMe)}>EXIT</button>}
      </div>
    </header>
  );
}

export default Header;
