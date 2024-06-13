import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import FancyInput from "../../../components/fancy-input/FancyInput";
import TodoList from "../../../components/todo-list/TodoList";
import ToggleButtons from "../../../components/toggle-buttons/ToggleButtons";
import { TODO_HEADING } from "../../../constans/Strings";
import { TodoItem } from "../../../models/Todo";
import TodoStore from "../../../store/TodoStore";

function Todo() {
    const {
        todoList,
        addTodoItem,
        removeTodoItem,
        clearTodo,
        updateStatus,
        loading,
    } = TodoStore();
    const [newTodo, setNewTodo] = useState("");
    const [filterType, setFilterType] = useState("");

    const filterTodoList = () => {
        let data;
        data = todoList.filter((item: TodoItem) => {
            if (filterType === "todo") {
                return item.isCompleted === false;
            } else if (filterType === "completed") {
                return item.isCompleted === true;
            } else {
                return item;
            }
        });
        return data;
    };

    useEffect(() => {
        newTodo !== "" && addTodoItem(newTodo);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newTodo]);

    return (
        <div className="todoList flex justify-center">
            <div className="sm:w-6/12 lg:w-4/12">
                <p className="font-mono text-3xl font-semibold">
                    {TODO_HEADING}
                </p>
                <FancyInput setNewTodo={setNewTodo} />
                <Box mt={2}>
                    <ToggleButtons
                        setFilter={setFilterType}
                        clearAll={clearTodo}
                    />
                </Box>
                <TodoList
                    data={filterType === "" ? todoList : filterTodoList()}
                    deleteItem={removeTodoItem}
                    updateStatus={updateStatus}
                />
            </div>
        </div>
    );
}

export default Todo;
