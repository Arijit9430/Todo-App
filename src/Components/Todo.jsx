import React, { useState, useRef, useEffect } from "react";
import "./CSS/Todo.css";
import TodoItems from "./TodoItems";

let count = 0;

function Todo() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    if (!inputRef.current.value.trim()) return;
    setTodos([
      ...todos,
      { no: count++, text: inputRef.current.value, display: "" },
    ]);
    inputRef.current.value = "";
    localStorage.setItem("todos_count", count);
  };

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("todos")) || [];
    const storedCount = parseInt(localStorage.getItem("todos_count")) || 0;
    setTodos(stored);
    count = storedCount;
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo">
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input
          ref={inputRef}
          className="todo-input"
          type="text"
          placeholder="Add Your Task"
        />
        <div onClick={add} className="todo-add-btn">ADD</div>
      </div>
      <div className="todo-list">
        {todos.map((item) => {
          return (
            <TodoItems
              setTodos={setTodos}
              key={item.no}
              text={item.text}
              display={item.display}
              no={item.no}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
