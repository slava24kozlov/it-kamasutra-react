import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Communities from "./components/Communities/Communities";
import Music from "./components/Music/Music";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Herder/HeaderContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import LoginContainer from "./components/Registration/LoginContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";


function App() {
  return (
    <BrowserRouter>
      <div className="app-main">
        <HeaderContainer/>
        <NavbarContainer/>
        <div className="app-profile">
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
          <Route path='/login' component={LoginContainer}/>
          <Redirect from='/' to='/profile'/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
