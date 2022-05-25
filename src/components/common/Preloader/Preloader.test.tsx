import { render } from "@testing-library/react";
import React from "react";
import Preloader from "./Preloader";

describe("tests for the Preloader component", () => {
    test("snapshot testing", () => {
        const {container} = render(<Preloader/>);
        expect(container).toMatchSnapshot();
    });
});
