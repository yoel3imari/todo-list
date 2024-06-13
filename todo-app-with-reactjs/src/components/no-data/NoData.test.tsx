/** @jest-environment jsdom */
import NoData from "./NoData";
import { render } from "@testing-library/react";

it("should render without crashing", () => {
    render(<NoData />);
});
