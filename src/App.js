import React from 'react';
import './App.css';
import Header from './components/Herder/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

function App() {
    return (
        <div className="app-main">
            <Header/>
            <Navbar/>
            <div className="app-profile">
                <Dialogs/>
                 {/*<Profile/>*/}
            </div>
        </div>
    );
}

export default App;
