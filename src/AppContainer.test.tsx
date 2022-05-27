import React from "react";
import {render, screen} from "@testing-library/react";
import AppContainer, {App} from "./AppContainer";
import {Provider} from "react-redux";
import store from "./redux/store";

type PropsType = {
    isAuth: boolean
}

describe("tests for AppContainer", () => {
    const dispatchMock = jest.fn() as jest.Mock<() => void>;
    const AppWithProvider: React.FC<PropsType> = ({isAuth}) => <Provider store={store}><App getAuthUserTC={dispatchMock} isAuthUser={isAuth}/></Provider>;
    beforeEach(() => {
        dispatchMock.mockReset();
    });
    test("render App without identification", () => {
        render(<AppWithProvider isAuth={true}/>);
        expect(dispatchMock).toBeCalledTimes(1);
        const header = screen.getByRole("banner");
        expect(header).toBeInTheDocument();
        expect(header).toBeVisible();
        const main = screen.getByTestId("testingMain");
        expect(main).toBeInTheDocument();
        expect(main).not.toBeVisible();
        expect(screen.getByText(/you must log in/i)).toBeVisible();
        expect(screen.getByText("Log in")).toBeVisible();
        expect(screen.getByLabelText(/logotype/i)).toBeVisible();
    });
    test("render App with identification", () => {
        render(<AppWithProvider isAuth={false}/>);
        expect(dispatchMock).toBeCalledTimes(0);
        const header = screen.getByRole("banner");
        expect(header).toBeInTheDocument();
        expect(header).toBeVisible();
        const main = screen.getByTestId("testingMain");
        expect(main).toBeInTheDocument();
        expect(main).toBeVisible();
    });
    test("render AppContainer", () => {
        render(<Provider store={store}><AppContainer/></Provider>);
        expect(screen.getByRole("banner")).toBeInTheDocument();
        expect(screen.getByTestId("testingMain")).toBeInTheDocument();
    });
});


