import React from 'react';
import logotype from '../../logo.svg';
import h from './Headers.module.css';


const Header = () => {
  return (
    <header className={h.main}>
        <img src={logotype} alt="image of header"/>
    </header>
  );
}

export default Header;
