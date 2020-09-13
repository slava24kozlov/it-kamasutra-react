import React from 'react';
import logotype from '../../logo.svg';
import h from './Headers.module.css';


const Header = () => {
  return (
    <header className={h.main}>
        <img src={logotype} alt="image of header"/>
        <p className={h.textHead}>THE PAGE IS TEST LESSON OF IT</p>
    </header>
  );
}

export default Header;
