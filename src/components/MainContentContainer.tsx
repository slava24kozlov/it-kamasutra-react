import React from "react";
import {Redirect, Route} from "react-router-dom";
import ProfileContainer from "./Profile/ProfileContainer";
import FriendsContainer from "./Friends/FriendsContainer";
import MessagesContainer from "./Messages/MessagesContainer";
import UsersContainer from "./Users/UsersContainer";
import Communities from "./Communities/Communities";
import Music from "./Music/Music";
import {compose} from "redux";
import {getAuthId, getIsAuth} from "../redux/selectors/AuthSelectors";
import {connect, ConnectedProps} from "react-redux";
import {withAuthRedirect} from "../hoc/AuthRedirect";
import {AppStateType} from "../redux/store";

const MainContent = (props: PropsFromRedux) => (
  <>
    <Route path='/profile/:userId?' render={() =>
      <ProfileContainer/>}/>
    <Route path='/friends' render={() =>
      <FriendsContainer/>}/>
    <Route path='/messages' render={() =>
      <MessagesContainer/>}/>
    <Route path='/users' render={() =>
      <UsersContainer/>}/>
    <Route path='/communities' component={Communities}/>
    <Route path='/music' component={Music}/>
    <Redirect from='/' to={`/profile/${props.idAuthUser}`}/>
  </>
)

const mapStateToProps = (state: AppStateType) => ({
  isAuthUser: getIsAuth(state),
  idAuthUser: getAuthId(state),
})

const connector = connect(mapStateToProps)
export type PropsFromRedux = ConnectedProps<typeof connector>

export default compose(connector, withAuthRedirect)(MainContent)