import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export let renderEntireTree = (state,addPost,addMessage) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addMessage={addMessage}/>
        </React.StrictMode>, document.getElementById('root')
    );
}


