import React from 'react';
import nf from './NavbarFriends.module.css';

const NavbarFriends = (props) => {
    let elements = props.friends.map(e => <img key={e.id} src={e.image} alt="friends navbar"/>)
    return (
        <div className={nf.main}>
            {elements}
        </div>
    );
}

export default NavbarFriends;
