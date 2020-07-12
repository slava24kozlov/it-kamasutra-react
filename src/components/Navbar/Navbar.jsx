import React from 'react';
import n from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={n.main}>
            <div className={`${n.item} ${n.active}`}>
                <a href="">Profile</a>
            </div>
            <div className={n.item}>
                <a href="">Friends</a>
            </div>
            <div className={n.item}>
                <a href="#">Messages</a>
            </div>
            <div className={n.item}>
                <a href="#">Communities</a>
            </div>
            <div className={n.item}>
                <a href="#">Music</a>
            </div>
        </nav>
    );
}

export default Navbar;
