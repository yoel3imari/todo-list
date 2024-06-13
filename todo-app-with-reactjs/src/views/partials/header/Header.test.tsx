/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import Header from "./Header";

it("should render without crashing", () => {
    render(<Header />);
});
