import React, {Suspense} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import HeaderContainer from "./components/Herder/HeaderContainer";
import MainContentContainer from './components/MainContentContainer';
import {connect} from "react-redux";
import {getAuthUserTC} from "./redux/reducer/AuthReducer";
import {getIsAuth} from "./redux/selectors/AuthSelectors";
import Preloader from "./components/common/Preloader/Preloader";
import {AppStateType} from "./redux/store";

type MapStateToPropsType = {
    isAuthUser: boolean
}
type MapDispatchToPropsType = {
    getAuthUserTC: () => void
}
type OwnPropsTypes = {}
type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsTypes

export class App extends React.Component<PropsType> {
    componentDidMount(): void {
        !this.props.isAuthUser && this.props.getAuthUserTC()
    }

    render() {
        return (
            <BrowserRouter>
                <HeaderContainer/>
                <Suspense fallback={<Preloader/>}>
                    <main data-testid="testingMain" className="app-main">
                        <MainContentContainer/>
                    </main>
                </Suspense>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuthUser: getIsAuth(state),
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsTypes, AppStateType>(mapStateToProps, {getAuthUserTC})(App);
