import create from "zustand";
import { TodoItem } from "../models/Todo";

interface TodoState {
    todoList: TodoItem[];
    loading?: boolean;
    addTodoItem: (title: string) => any;
    removeTodoItem: (id: string) => void;
    updateStatus: (id: string) => void;
    clearTodo: () => void;
}

const TodoStore = create<TodoState>((set) => ({
    todoList: [],

    addTodoItem: (title: string) => {
        set((state) => ({
            todoList: [
                ...state.todoList,
                {
                    id: new Date() + title,
                    title,
                    isCompleted: false,
                } as TodoItem,
            ],
        }));
    },

    removeTodoItem: (id) => {
        set({ loading: true });
        set((state) => ({
            todoList: state.todoList.filter((todoItem) => todoItem.id !== id),
        }));
        set({ loading: false });
    },
    updateStatus: (id) => {
        set({ loading: true });
        set((state) => ({
            todoList: state.todoList.map((todoItem) =>
                todoItem.id === id
                    ? ({
                          ...todoItem,
                          isCompleted: !todoItem.isCompleted,
                      } as TodoItem)
                    : todoItem
            ),
        }));
        set({ loading: false });
    },
    clearTodo: () => {
        set(() => ({
            todoList: [],
        }));
    },
}));

export default TodoStore;
