import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import HeaderContainer from "./components/Herder/HeaderContainer";
import MainContentContainer from './components/MainContentContainer';
import {connect} from "react-redux";
import {getAuthUserTC} from "./redux/reducer/AuthReducer";
import {getIsAuth, getIsFetchingAuth} from "./redux/selectors/AuthSelectors";
import Preloader from "./components/common/Preloader/Preloader";
import {AppStateType} from "./redux/store";

type MapStateToPropsType = {
  isAuthUser: boolean
  isFetching: boolean
}

type MapDispatchToPropsType = {
  getAuthUserTC: () => void
}

type OwnPropsTypes = {}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsTypes

class AppContainer extends React.Component<PropsType> {
  componentDidMount(): void {
    !this.props.isAuthUser && this.props.getAuthUserTC()
  }

  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <HeaderContainer/>
        <main className="app-main">
          {this.props.isFetching ? <Preloader/> : <MainContentContainer/>}
        </main>
      </HashRouter>
    );
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  isAuthUser: getIsAuth(state),
  isFetching: getIsFetchingAuth(state)
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsTypes, AppStateType>(mapStateToProps, {getAuthUserTC})(AppContainer);
