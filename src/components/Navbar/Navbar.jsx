import React from 'react';
import n from './Navbar.module.css';
import NavbarFriends from "./NavbarFriends";
import {NavLink} from "react-router-dom";
import store from '../../redux/store-redux';

const Navbar = () => {
    let sidebar = store.getState().sidebar.FriendsBar;
    return (
        <nav className={n.main}>
            <div className={n.item}>
                <NavLink to='/profile' activeClassName={n.active}>Profile</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/messages' activeClassName={n.active}>Messages</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/communities' activeClassName={n.active}>Communities</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/music' activeClassName={n.active}>Music</NavLink>
            </div>
            <div className={`${n.item} ${n.itemFriends}`}>
                <NavLink to='/friends' activeClassName={n.active}>Friends
                    <NavbarFriends friends={sidebar}/></NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/users' activeClassName={n.active}>Find Users</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
