import React, {PropsWithChildren} from "react";
import {BrowserRouter} from "react-router-dom";

export const ComponentsWithRouter: React.FC = <T extends Record<string, unknown> = Record<string, unknown>>({children}: PropsWithChildren<T>) => (
    <BrowserRouter>{children}</BrowserRouter>
);
