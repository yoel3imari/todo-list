/** @jest-environment jsdom */
import ToggleButtons from "./ToggleButtons";
import { render } from "@testing-library/react";

it("should render without crashing", () => {
    render(<ToggleButtons setFilter={() => ""} clearAll={() => ""} />);
});
