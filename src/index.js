import React from 'react';
import * as serviceWorker from './serviceWorker';
import {renderEntireTree} from './render';
import {addPost} from './redux/state';
import {addMessages} from './redux/state';
import state from './redux/state'

renderEntireTree(state,addPost,addMessages);

serviceWorker.unregister();
