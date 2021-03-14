import React from 'react';
import nf from './NavbarFriends.module.css';

const NavbarFriends = (props) => {
    let elements = props.friends.map(e => <img src={e.image} alt="image friends navbar"/>)
    return (
        <div className={nf.main}>
            {elements}
        </div>
    );
}

export default NavbarFriends;
