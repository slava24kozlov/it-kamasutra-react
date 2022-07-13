import React from "react";
import style from "./Navbar.module.scss";
import {NavLink} from "react-router-dom";

type PropsNavbarType = {
    isAuthUser: boolean
    idAuthUser: number | null
    isError: boolean
}

const Navbar: React.FC<PropsNavbarType> = ({isAuthUser, idAuthUser, isError}) => {
    if (!isAuthUser) {
        return <h1 style={{margin: 0}}>You must log in</h1>;
    } else if (isError) {
        return <h1 style={{margin: 0}}>You have some kind of error</h1>;
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
