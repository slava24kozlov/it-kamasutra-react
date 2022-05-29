import React from "react";
import "./App.css";
import {BrowserRouter} from "react-router-dom";
import HeaderContainer from "./components/Herder/HeaderContainer";
import MainContentContainer from "./components/MainContentContainer";
import {connect} from "react-redux";
import {getAuthUserTC} from "./redux/reducer/AuthReducer";
import {getAuthErrorMessage, getIsAuth, getIsFetchingAuth} from "./redux/selectors/AuthSelectors";
import Preloader from "./components/common/Preloader/Preloader";
import {AppStateType} from "./redux/store";
import Error from "./components/Error/Error";

export type MapStateToPropsType = {
    isAuthUser: boolean
    errorAuthMessage: string | null
    isFetching: boolean
}
type MapDispatchToPropsType = {
    getAuthUserTC: () => void
}
type OwnPropsTypes = Record<string, unknown>
type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsTypes

export class App extends React.Component<PropsType> {
    componentDidMount(): void {
        !this.props.isAuthUser && this.props.getAuthUserTC();
    }

    render() {
        return (
            <BrowserRouter>
                <HeaderContainer/>
                <main data-testid="testingMain" className="app-main">
                    {this.props.isFetching ? <Preloader/> : this.props.errorAuthMessage ?
                        <Error error={this.props.errorAuthMessage}/> :
                        <MainContentContainer isAuth={this.props.isAuthUser}/>}
                </main>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuthUser: getIsAuth(state),
    errorAuthMessage: getAuthErrorMessage(state),
    isFetching: getIsFetchingAuth(state),
});

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsTypes, AppStateType>(mapStateToProps, {getAuthUserTC})(App);
