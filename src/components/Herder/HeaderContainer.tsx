import React from "react";
import Header from "./Header";
import {connect, ConnectedProps} from "react-redux";
import {loginOutUserTC} from "../../redux/reducer/LoginReducer";
import {getAuthId, getIsAuth, getLoginAuthUser} from "../../redux/selectors/AuthSelectors";
import {getRememberMe} from "../../redux/selectors/LoginSelectors";
import {AppStateType} from "../../redux/store";

function HeaderContainer(props: PropsFromRedux) {
    return (
        <Header {...props}/>
    );
}

const mapStateToProps = (state: AppStateType) => ({
    isAuthUser: getIsAuth(state),
    idAuthUser: getAuthId(state),
    loginAuthUser: getLoginAuthUser(state),
    rememberMe: getRememberMe(state),
});

const connector = connect(mapStateToProps, {loginOutUserTC});
export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(HeaderContainer);
