import React from 'react';
import './App.css';
import Header from './components/Herder/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Friends from "./components/Friends/Friends";
import Communities from "./components/Communities/Communities";
import Music from "./components/Music/Music";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
        <div className="app-main">
            <Header/>
            <Navbar/>
            <div className="app-profile">
                <Route path='/profile' render={() =>
                    <Profile/>}/>
                <Route path='/friends' render={() =>
                    <Friends/>}/>
                <Route path='/messages' render={() =>
                    <MessagesContainer/>}/>
                <Route path='/users' render={() =>
                    <UsersContainer/>}/>
                <Route path='/communities' component={Communities}/>
                <Route path='/music' component={Music}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
