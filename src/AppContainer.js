import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import HeaderContainer from "./components/Herder/HeaderContainer";
import MainContentContainer from "./components/MainContentContainer";
import {connect} from "react-redux";
import {getAuthUserTC} from "./redux/reducer/auth-reducer";
import {getIsAuth, getIsFetchingAuth} from "./redux/selectors/AuthSelectors";
import Preloader from "./components/common/Preloader/Preloader";

class AppContainer extends React.Component {
  componentDidMount() {
    !this.props.isAuthUser && this.props.getAuthUserTC()
  }

  render() {
    return (
      <BrowserRouter>
        <HeaderContainer/>
        <main className="app-main">
          {this.props.isFetching ? <Preloader/> : <MainContentContainer/>}
        </main>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthUser: getIsAuth(state),
  isFetching: getIsFetchingAuth(state)
})

export default connect(mapStateToProps, {getAuthUserTC})(AppContainer);
