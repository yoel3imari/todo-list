import { create } from "zustand";

interface Todo {
  id?: number
  text: string
  completed: boolean
  createdAt?: string
}

interface TodoState {
  todos: Todo[],
  addTodo: (text: string) => void,
  updateTodo: (id: number) => void,
  removeTodo: (id: number) => void,
  toggleCompleted: (id: number) => void
}

const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (text: string) => {
    set((state) => ({
      todos: [...state.todos, {text, completed: false}]
    }))
  },
  removeTodo: (id: number) => {
    
  },
  toggleCompleted: () => {},
  addTodo: ,

}))