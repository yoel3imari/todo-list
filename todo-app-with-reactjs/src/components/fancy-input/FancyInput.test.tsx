/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import FancyInput from "./FancyInput";

it("should render without crashing", () => {
    render(<FancyInput setNewTodo={() => ""} />);
});
