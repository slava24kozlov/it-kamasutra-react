import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Header from './components/Herder/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from "./components/Profile/ProfileContainer";
import Friends from "./components/Friends/Friends";
import Communities from "./components/Communities/Communities";
import Music from "./components/Music/Music";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";


function App() {
    return (
        <BrowserRouter>
        <div className="app-main">
            <Header/>
            <Navbar/>
            <div className="app-profile">
                <Route path='/profile/:userId?' render={() =>
                    <ProfileContainer/>}/>
                <Route path='/friends' render={() =>
                    <Friends/>}/>
                <Route path='/messages' render={() =>
                    <MessagesContainer/>}/>
                <Route path='/users' render={() =>
                    <UsersContainer/>}/>
                <Route path='/communities' component={Communities}/>
                <Route path='/music' component={Music}/>
                <Redirect from='/' to='/profile'/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
