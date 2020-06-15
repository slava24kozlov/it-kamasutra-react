import React from 'react';
import './App.css';
import Headers from './components/Headers';
import Navigation from './components/Navigation';
import Profile from "./components/Profile";

function App() {
    return (
        <div className="app">
            <Headers/>
            <Navigation/>
            <Profile/>
        </div>
    );
}

export default App;
