import React from "react";
import Wrapper from "../common/Wrappers/WrapperComponents";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {NavLink} from "react-router-dom";

const PageNotFound = () => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.authUser.isAuth);
    return (
        <Wrapper title="OOPS! PAGE NOT FOUND">
            <p>Sorry, but the page you are looking is not found. Please, make sure you have typed the current URL.</p>
            <NavLink to={isAuth ? "/" : "/login"}>
                <button style={{padding: "10px"}}>{isAuth ? "Home" : "Log in"}</button>
            </NavLink>
        </Wrapper>
    );
};

export default PageNotFound;
