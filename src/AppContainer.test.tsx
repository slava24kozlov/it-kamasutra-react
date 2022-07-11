import React from "react";
import {render, screen} from "@testing-library/react";
import AppContainer, {App, MapStateToPropsType} from "./AppContainer";
import {Provider} from "react-redux";
import store from "./redux/store";

describe("tests for AppContainer", () => {
    const dispatchMock = jest.fn() as jest.Mock<() => void>;
    const AppWithProvider: React.FC<MapStateToPropsType> = ({isAuthUser, isFetching, idAuthUser}) =>
        <Provider store={store}>
            <App getAuthUserTC={dispatchMock}
                 isFetching={isFetching}
                 isAuthUser={isAuthUser}
                 idAuthUser={idAuthUser}
            />
        </Provider>;
    beforeEach(() => {
        dispatchMock.mockReset();
    });
    test("render App with identification", () => {
        render(<AppWithProvider isFetching={true} isAuthUser={false} idAuthUser={111}/>);
        expect(dispatchMock).toBeCalledTimes(1);
        const main = screen.getByTestId("testingMain");
        expect(main).toBeInTheDocument();
        const preloader = screen.getByLabelText("page preloader");
        expect(preloader).toBeVisible();
        expect(main).toContainElement(preloader);
    });
    test("render App without identification", () => {
        render(<AppWithProvider isFetching={true} isAuthUser={true} idAuthUser={111}/>);
        expect(dispatchMock).toBeCalledTimes(0);
        const header = screen.getByRole("banner");
        expect(header).toBeInTheDocument();
        const main = screen.getByTestId("testingMain");
        expect(main).toBeVisible();
    });
    test("displaying the preloader when loading the App", () => {
        render(<AppWithProvider isFetching={true} isAuthUser={true} idAuthUser={111}/>);
        expect(screen.getByTestId("testingMain")).toBeVisible();
        const preloader = screen.getByLabelText("page preloader");
        expect(preloader).toBeInTheDocument();
        expect(preloader).toBeVisible();
    });
    test("render AppContainer", () => {
        render(<Provider store={store}><AppContainer/></Provider>);
        expect(screen.getByRole("banner")).toBeInTheDocument();
        expect(screen.getByTestId("testingMain")).toBeInTheDocument();
    });
});


