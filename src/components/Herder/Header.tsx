import React from 'react';
import style from './Headers.module.scss';
import {NavLink} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import {PropsFromRedux} from "./HeaderContainer";
import Logotype from "../../Logotype";

export const Header: React.FC<PropsFromRedux> = ({isAuthUser, idAuthUser, loginAuthUser, rememberMe, loginOutUserTC}) => {
  return (
    <header>
      <div className={style.main}>
        <NavLink to={isAuthUser ? `/profile/${idAuthUser}` : '/login'} title={isAuthUser ? "Home" : "Log in"}>
          <Logotype/>
        </NavLink>
        <Navbar {...{isAuthUser, idAuthUser}}/>
        <div className={style.login}>
          {isAuthUser
            ? <p>{loginAuthUser}</p>
            : <NavLink to='/login' title="Log in"><button>Log in</button></NavLink>}
          {isAuthUser &&
            <button style={{fontWeight: "bold"}}
                    onClick={() => loginOutUserTC(rememberMe)}
                    title="Exit">
              EXIT
            </button>
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
