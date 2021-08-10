import React from 'react';
import logotype from '../../logo.svg';
import h from './Headers.module.css';
import {NavLink} from "react-router-dom";


const Header = () => {
  return (
    <header className={h.main}>
        <NavLink to='/profile'><img src={logotype} alt="header"/></NavLink>
        <p className={h.textHead}>THE PAGE IS TEST LESSON OF IT</p>
    </header>
  );
}

export default Header;
