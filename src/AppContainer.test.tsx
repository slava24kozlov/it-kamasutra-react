import React from "react";
import {render, screen} from "@testing-library/react";
import AppContainer, {App, MapStateToPropsType} from "./AppContainer";
import {Provider} from "react-redux";
import store from "./redux/store";

describe("tests for AppContainer",() => {
    const dispatchMock = jest.fn() as jest.Mock<() => void>;
    const errorProps = {
        code: null,
        name: null,
        message: null,
        isError: false
    };
    const AppWithProvider: React.FC<MapStateToPropsType> = ({isAuthUser, isFetching, errorAuthMessage}) =>
        <Provider store={store}>
            <App getAuthUserTC={dispatchMock}
                 isFetching={isFetching}
                 isAuthUser={isAuthUser}
                 errorAuthMessage={errorAuthMessage}
            />
        </Provider>;
    beforeEach(() => {
        dispatchMock.mockReset();
    });
    test("render App with identification",() => {
        render(<AppWithProvider isFetching={true} isAuthUser={false} errorAuthMessage={errorProps}/>);
        expect(dispatchMock).toBeCalledTimes(1);
        const main = screen.getByTestId("testingMain");
        expect(main).toBeInTheDocument();
        const preloader = screen.getByLabelText("page preloader");
        expect(preloader).toBeVisible();
        expect(main).toContainElement(preloader);
    });
    test("render App without identification",() => {
        render(<AppWithProvider isFetching={true} isAuthUser={true} errorAuthMessage={errorProps}/>);
        expect(dispatchMock).toBeCalledTimes(0);
        const header = screen.getByRole("banner");
        expect(header).toBeInTheDocument();
        const main = screen.getByTestId("testingMain");
        expect(main).toBeVisible();
    });
    test("displaying the preloader when loading the App", () => {
        render(<AppWithProvider isFetching={true} isAuthUser={true} errorAuthMessage={errorProps}/>);
        expect(screen.getByTestId("testingMain")).toBeVisible();
        const preloader = screen.getByLabelText("page preloader");
        expect(preloader).toBeInTheDocument();
        expect(preloader).toBeVisible();
    });
    test("render App with server error", () => {
        render(<AppWithProvider isFetching={false} isAuthUser={true} errorAuthMessage={{
            code: "test code",
            name: "test name",
            message: "test message",
            isError: true,
        }}/>);
        const main = screen.getByTestId("testingMain");
        expect(main).toBeVisible();
        const headingError = screen.getByText(/error/i);
        expect(headingError).toBeInTheDocument();
        expect(main).toContainElement(headingError);
    });
    test("render AppContainer", () => {
        render(<Provider store={store}><AppContainer/></Provider>);
        expect(screen.getByRole("banner")).toBeInTheDocument();
        expect(screen.getByTestId("testingMain")).toBeInTheDocument();
    });
});


