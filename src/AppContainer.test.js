import React from 'react';
import {render, screen} from '@testing-library/react';
import AppContainer from "./AppContainer";
import {Provider} from "react-redux";
import store from "./redux/store";

const AppWithProvider = () => (
    <Provider store={store}><AppContainer/></Provider>
)
describe('tests for AppContainer', () => {
    test('render the header when the application is initially loaded', () => {
        render(<AppWithProvider/>);
        const headText = screen.getByText(/you must log in/i)
        const buttonLogIn = screen.getByText("Log in")
        const logotype = screen.getByLabelText(/logotype/i)
        const bannerHeader = screen.getByRole('banner')
        expect(screen.getByTestId('testingMain')).toBeInTheDocument()
        expect(bannerHeader).toBeInTheDocument()
        expect(headText).toBeInTheDocument()
        expect(buttonLogIn).toBeInTheDocument()
        expect(logotype).toBeInTheDocument()
        expect(bannerHeader).toContainElement(headText, buttonLogIn, logotype)
    });
})


