import React from "react";
import "./CSS/TodoItems.css";
import tick from "./Assets/tick.png";
import non_tick from "./Assets/not_tick.png";
import cross from "./Assets/cross.png";

function TodoItems({ no, display, text, setTodos }) {
  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos")) || [];
    data = data.map((item) =>
      item.no === no
        ? { ...item, display: item.display === "" ? "line-through" : "" }
        : item
    );
    setTodos(data);
  };

  const remove = (no) => {
    let data = JSON.parse(localStorage.getItem("todos")) || [];
    data = data.filter((item) => item.no !== no);
    setTodos(data);
  };

  return (
    <div className="todoitems">
      <div className={`todoitems-container ${display}`} onClick={() => toggle(no)}>
        {display === "" ? <img src={non_tick} alt="" /> : <img src={tick} alt="" />}
        <div className="todoitems-text">{text}</div>
      </div>
      <img
        className="todoitems-cross-icons"
        src={cross}
        alt=""
        onClick={() => remove(no)}
      />
    </div>
  );
}

export default TodoItems;
