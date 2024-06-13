/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import Todo from "./Todo";

it("should render without crashing", () => {
    render(<Todo />);
});
