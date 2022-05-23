import React from "react";
import {render, screen} from "@testing-library/react";
import AppContainer, {App} from "./AppContainer";
import {ComponentsWithStore} from "./tests/TestsWrapper";

type PropsType = {
    isAuth: boolean
}

describe("tests for AppContainer", () => {
    const dispatchMock = jest.fn() as jest.Mock<() => void>;
    const AppWithStore: React.FC<PropsType> = ({isAuth}) => <ComponentsWithStore><App getAuthUserTC={dispatchMock} isAuthUser={isAuth}/></ComponentsWithStore>;
    beforeEach(() => {
        dispatchMock.mockReset();
    });
    test("render App without identification", () => {
        render(<AppWithStore isAuth={false}/>);
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
        render(<AppWithStore isAuth={true}/>);
        expect(dispatchMock).toBeCalledTimes(0);
        const header = screen.getByRole("banner");
        expect(header).toBeInTheDocument();
        expect(header).toBeVisible();
        const main = screen.getByTestId("testingMain");
        expect(main).toBeInTheDocument();
        expect(main).toBeVisible();
    });
    test("render AppContainer", () => {
        render(<ComponentsWithStore><AppContainer/></ComponentsWithStore>);
        expect(screen.getByRole("banner")).toBeInTheDocument();
        expect(screen.getByTestId("testingMain")).toBeInTheDocument();
    });
});


