import React from "react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";

const HomeButton = () => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.authUser.isAuth);
    return (
        <NavLink to={isAuth ? "/" : "/login"}>
            <button style={{padding: "10px", margin: "10px 0", fontWeight: "bold", cursor: "pointer"}}>Home</button>
        </NavLink>
    );
};

export default HomeButton;
