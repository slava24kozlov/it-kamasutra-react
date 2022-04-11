import React from 'react';
import style from './Headers.module.scss';
import {NavLink} from "react-router-dom";
import Logotype from "../../Logotype";
import Navbar from "./Navbar/Navbar";
import {PropsFromRedux} from "./HeaderContainer";

const Header: React.FC<PropsFromRedux> = ({isAuthUser, idAuthUser, loginAuthUser, rememberMe, loginOutUserTC}) => {
  return (
    <header>
      <div className={style.main}>
        <NavLink to={isAuthUser ? `/profile/${idAuthUser}` : '/login'}>
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
      </div>
    </header>
  );
}

export default Header;
