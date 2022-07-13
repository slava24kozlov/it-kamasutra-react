import React from "react";
import Wrapper from "../common/Wrappers/WrapperComponents";
import HomeButton from "../common/RedirectButtons/HomeButton";

const PageNotFound = () => (
    <Wrapper title="OOPS! PAGE NOT FOUND">
        <p>Sorry, but the page you are looking is not found. Please, make sure you have typed the current URL.</p>
        <HomeButton/>
    </Wrapper>
);

export default PageNotFound;
