import React from 'react';
import store from './redux/store'
import ReactDOM from "react-dom";
import App from "./App";

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 setPost={store.setPost.bind(store)}
                 updatePostText={store.updatePostText.bind(store)}
                 setMessage={store.setMessage.bind(store)}
                 updateMessageText={store.updateMessageText.bind(store)}/>
        </React.StrictMode>, document.getElementById('root')
    );
}

renderEntireTree(store.getState());
store.subscriber(renderEntireTree);



