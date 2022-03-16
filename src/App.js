import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import HeaderContainer from "./components/Herder/HeaderContainer";
import MainContentContainer from "./components/MainContentContainer";

const App = () => (
  <BrowserRouter>
    <HeaderContainer/>
    <main className="app-main">
      <MainContentContainer/>
    </main>
  </BrowserRouter>
)

export default App;
