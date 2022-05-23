import React from "react";
import {render, screen} from "@testing-library/react";
import Header from "./Header";
import {ComponentsWithRouter} from "../../tests/TestsWrapper";
import userEvent from "@testing-library/user-event";

describe("tests for Header component", () => {
    const dispatchMock = jest.fn() as jest.Mock<() => void>;
    const HeaderTest = ({isAuth = false, id = 12345, login = "LoginTest", isRemember = false}): JSX.Element => (
        <ComponentsWithRouter>
            <Header loginOutUserTC={dispatchMock} isAuthUser={isAuth} idAuthUser={id} loginAuthUser={login} rememberMe={isRemember}/>
        </ComponentsWithRouter>
    );
    afterEach(() => {
        dispatchMock.mockReset();
    });
    test("correct rendering the Header", () => {
        render(<HeaderTest/>);
        const header = screen.getByRole("banner");
        const heading = screen.getByRole("heading");
        const button = screen.getByText("Log in");
        expect(header).toBeInTheDocument();
        expect(header).toContainElement(heading);
        expect(header).toContainElement(button);
        expect(heading).toBeVisible();
        expect(button).toBeVisible();
    });
    test("rendering Header when without identification", () => {
        render(<HeaderTest/>);
        const links = screen.getAllByRole("link") as Array<HTMLAnchorElement>;
        const logotype = screen.getByLabelText("Logotype");
        const button = screen.getByRole("button");
        expect(screen.queryByRole("navigation")).toBeNull();
        expect(button).toContainHTML("Log in");
        expect(links.length).toBe(2);
        links.forEach((el, index) => {
            expect(el).toBeInTheDocument();
            expect(el).toBeVisible();
            index === 0 && expect(el).toContainElement(logotype);
            index === 1 && expect(el).toContainElement(button);
            expect(el.title).toBe("Log in");
            expect(el.href).toContain("/login");
        });
        expect(screen.queryByText("Exit")).toBeNull();
        expect(dispatchMock).not.toBeCalled();
    });
    test("rendering Header with identification", () => {
        render(<HeaderTest isAuth={true} id={12345} login="LoginTest"/>);
        const link = screen.getByTitle("Home") as HTMLAnchorElement;
        const logotype = screen.getByLabelText("Logotype");
        const button = screen.getByRole("button");
        expect(screen.queryByRole("navigation")).not.toBeNull();
        expect(link).toBeVisible();
        expect(link.href).toContain("/profile/12345");
        expect(link).toContainElement(logotype);
        expect(button).toContainHTML("EXIT");
        expect(button).toBeVisible();
        expect(screen.getByText("LoginTest")).toBeVisible();
        expect(dispatchMock).not.toBeCalled();
    });
    test("checking the behavior of the exit button", () => {
        render(<HeaderTest isAuth={true} id={12345} login="LoginTest" isRemember={true}/>);
        const buttonExit = screen.getByRole("button") as HTMLAnchorElement;
        expect(buttonExit).toContainHTML("EXIT");
        expect(buttonExit).toBeVisible();
        expect(buttonExit.title).toBe("Exit");
        expect(buttonExit.style.fontWeight).toBe("bold");
        userEvent.click(buttonExit);
        expect(dispatchMock).toBeCalledTimes(1);
        expect(dispatchMock).toBeCalledWith(true);
    });
});
