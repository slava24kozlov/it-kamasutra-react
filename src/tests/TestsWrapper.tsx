import React from "react";
import {Provider} from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";

export const ComponentsWithStore: React.FC = ({children}) => (
    <Provider store={store}>{children}</Provider>
);

export const ComponentsWithRouter: React.FC = ({children}) => (
    <BrowserRouter>{children}</BrowserRouter>
);
