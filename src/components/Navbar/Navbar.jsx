import React from 'react';
import n from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={n.main}>
            <div className={n.item}>
                <NavLink to='/profile' activeClassName={n.active}>Profile</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/friends' activeClassName={n.active}>Friends</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/messages' activeClassName={n.active}>Messages</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='communities' activeClassName={n.active}>Communities</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='music' activeClassName={n.active}>Music</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
