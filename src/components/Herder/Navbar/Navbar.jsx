import React from 'react';
import style from './Navbar.module.scss';
import {NavLink} from "react-router-dom";

const Navbar = ({isAuthUser, idAuthUser}) => {
  return (
    <nav className={style.main}>
      <NavLink to={isAuthUser ? `/profile/${idAuthUser}` : '/profile'}
               activeClassName={style.active}>Profile</NavLink>
      <NavLink to='/messages' activeClassName={style.active}>Messages</NavLink>
      <NavLink to='/communities' activeClassName={style.active}>Communities</NavLink>
      <NavLink to='/music' activeClassName={style.active}>Music</NavLink>
      <NavLink to='/friends' activeClassName={style.active}>Friends</NavLink>
      <NavLink to='/users' activeClassName={style.active}>Find Users</NavLink>
    </nav>
  );
}

export default Navbar;
