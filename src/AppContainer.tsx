import React from "react";
import "./App.css";
import {BrowserRouter} from "react-router-dom";
import HeaderContainer from "./components/Herder/HeaderContainer";
import MainContentContainer from "./components/MainContentContainer";
import {connect} from "react-redux";
import {getAuthUserTC} from "./redux/reducer/AuthReducer";
import {getAuthId, getIsAuth, getIsFetchingAuth} from "./redux/selectors/AuthSelectors";
import Preloader from "./components/common/Preloader/Preloader";
import {AppStateType} from "./redux/store";

export type MapStateToPropsType = {
    isAuthUser: boolean
    isFetching: boolean
    idAuthUser: number | null
}
type MapDispatchToPropsType = {
    getAuthUserTC: () => void
}
type OwnPropsTypes = Record<string, unknown>
type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsTypes

export class App extends React.Component<PropsType> {
    componentDidMount(): void {
        if (!this.props.isAuthUser) {
            this.props.getAuthUserTC();
        }
    }

    render() {
        return (
            <BrowserRouter>
                <HeaderContainer/>
                <main data-testid="testingMain" className="app-main">
                    {this.props.isFetching ? <Preloader entire/> :
                        <MainContentContainer isAuthUser={this.props.isAuthUser} idAuthUser={this.props.idAuthUser}/>}
                </main>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuthUser: getIsAuth(state),
    isFetching: getIsFetchingAuth(state),
    idAuthUser: getAuthId(state),
});

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsTypes, AppStateType>(mapStateToProps, {getAuthUserTC})(App);
