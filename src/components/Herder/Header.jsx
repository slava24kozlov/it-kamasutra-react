import React from 'react';
import logotype from '../../logo.svg';
import style from './Headers.module.scss';
import {NavLink} from "react-router-dom";


const Header = (props) => {
  return (
    <header className={style.main}>
        <NavLink to={`/profile/${props.userId}`}><img src={logotype} alt="header"/></NavLink>
        <p className={style.textHead}>THE PAGE IS TEST LESSON OF IT</p>
      <div className={style.login}>
        <NavLink to={`/profile/${props.userId}`}>{props.isAuth ? props.login : 'Login'}</NavLink>
      </div>
    </header>
  );
}

export default Header;
