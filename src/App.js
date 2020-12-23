import React from 'react';
import './App.css';
import Header from './components/Herder/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import Friends from "./components/Friends/Friends";
import Communities from "./components/Communities/Communities";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
        <div className="app-main">
            <Header/>
            <Navbar friendsNav={props.state.sidebar.FriendsBar}/>
            <div className="app-profile">
                <Route path='/profile' render={() =>
                    <Profile profilePage={props.state.ProfilePage}
                             dispatch={props.dispatch}/>}/>
                <Route path='/friends' render={() =>
                    <Friends friends={props.state.sidebar.FriendsBar}/>}/>
                <Route path='/messages' render={() =>
                    <Messages messagesPage={props.state.MessagesPage}
                              dispatch={props.dispatch}/>}/>
                <Route path='/communities' component={Communities}/>
                <Route path='/music' component={Music}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
