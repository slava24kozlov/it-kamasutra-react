import React from 'react';
import nf from './NavbarFriends.module.css';
import {NavLink} from "react-router-dom";

const NavbarFriends = (props) => {
    let elements = props.friends.map(e => <img src={e.image} alt="image friends navbar"/>)
    return (
        <div className={nf.main}>
            {elements}
        </div>
    );
}

export default NavbarFriends;
