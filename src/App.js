import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log("Todo List Updated");
  }, [todos]);

  const addTodo = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button onClick={addTodo}>Add Task</button>
      </div>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <span onClick={() => deleteTodo(index)}>✖</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;