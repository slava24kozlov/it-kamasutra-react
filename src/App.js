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
            <Navbar state={props.state.sidebar}/>
            <div className="app-profile">
                <Route path='/profile' render={() => <Profile state={props.state.ProfilePage}/>}/>
                <Route path='/friends' render={() => <Friends state={props.state.sidebar}/>}/>
                <Route path='/messages' render={() => <Messages state={props.state.MessagesPage}/>}/>
                <Route path='/communities' component={Communities}/>
                <Route path='/music' component={Music}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
