import React from 'react';
import style from './Headers.module.scss';
import {NavLink} from "react-router-dom";
import Logotype from "../../Logotype";
import Navbar from "./Navbar/Navbar";

const Header = ({isAuthUser, idAuthUser, loginAuthUser, rememberMe, loginOutUserTC}) => {
  return (
    <header className={style.main}>
      <NavLink to={isAuthUser ? `/profile/${idAuthUser}` : '/profile'}>
        <Logotype/>
      </NavLink>
      <Navbar {...{isAuthUser, idAuthUser}}/>
      <div className={style.login}>
        {isAuthUser
          ? <p>{loginAuthUser}</p>
          : <NavLink to='/login'><button>Log in</button></NavLink>}
        {isAuthUser &&
          <button style={{fontWeight: "bold"}}
                  onClick={() => loginOutUserTC(rememberMe)}>
            EXIT
          </button>
        }
      </div>
    </header>
  );
}

export default Header;
