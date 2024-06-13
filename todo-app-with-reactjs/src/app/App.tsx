import React from "react";
import "./App.css";
import Header from "../views/partials/header/Header";
import Todo from "../views/pages/todo/Todo";

function App() {
    return (
        <div className="App">
            <Header />
            <Todo />
        </div>
    );
}

export default App;
