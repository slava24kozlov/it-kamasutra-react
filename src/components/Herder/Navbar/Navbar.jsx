import React from "react";
import style from "./Navbar.module.scss";
import {NavLink} from "react-router-dom";

const Navbar = ({isAuthUser, idAuthUser}) => {
    if (!isAuthUser) {
        return <h1 style={{margin: 0}}>You must log in</h1>;
    }
    return (
        <nav className={style.main}>
            <NavLink to={isAuthUser ? `/profile/${idAuthUser}` : "/profile"}>Profile</NavLink>
            <NavLink to="/messages">Messages</NavLink>
            <NavLink to="/communities">Communities</NavLink>
            <NavLink to="/music">Music</NavLink>
            <NavLink to="/friends">Friends</NavLink>
            <NavLink to="/users">Find Users</NavLink>
        </nav>
    );
};

export default Navbar;
