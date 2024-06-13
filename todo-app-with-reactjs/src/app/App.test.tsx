import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//     render(<App />);
//     const linkElement = screen.getByText(/Play with Todo here/i);
//     expect(linkElement).toBeInTheDocument();
// });

it("should render without crashing", () => {
    render(<App />);
});
