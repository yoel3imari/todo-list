/** @jest-environment jsdom */
import TodoList from "./TodoList";
import { render } from "@testing-library/react";

describe("Todo List", () => {
    const mockData = [
        { id: "id+1", title: "Volvo", isCompleted: false },
        { id: "id+2", title: "Saab", isCompleted: false },
        { id: "id+3", title: "Audi", isCompleted: false },
    ];

    it("should render with Empty array", () => {
        render(
            <TodoList data={[]} deleteItem={() => ""} updateStatus={() => ""} />
        );
    });

    it("should render with mock data", () => {
        render(
            <TodoList
                data={mockData}
                deleteItem={() => ""}
                updateStatus={() => ""}
            />
        );
    });
});
