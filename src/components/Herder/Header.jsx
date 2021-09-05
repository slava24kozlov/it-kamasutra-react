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
        <NavLink to={props.isAuthUser ? `/profile/${props.idAuthUser}` : '/profile'}>
          {props.isAuthUser ? props.loginAuthUser : 'Login'}
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
