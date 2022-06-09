import React from "react";
import {render, screen} from "@testing-library/react";
import AppContainer, {App, MapStateToPropsType} from "./AppContainer";
import {Provider} from "react-redux";
import store from "./redux/store";

describe("tests for AppContainer", () => {
    const dispatchMock = jest.fn() as jest.Mock<() => void>;
    const errorProps = {
        code: null,
        name: null,
        message: null,
        isError: false
    };
    const AppWithProvider: React.FC<MapStateToPropsType> = ({isAuthUser, isFetching, errorAuthMessage}) => <Provider store={store}><App getAuthUserTC={dispatchMock} isFetching={isFetching} isAuthUser={isAuthUser} errorAuthMessage={errorAuthMessage}/></Provider>;
    beforeEach(() => {
        dispatchMock.mockReset();
    });
    test("render App without identification", () => {
        render(<AppWithProvider isFetching={false} isAuthUser={true} errorAuthMessage={errorProps}/>);
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
        render(<AppWithProvider isFetching={false} isAuthUser={false} errorAuthMessage={errorProps}/>);
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


