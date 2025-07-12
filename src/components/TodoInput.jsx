import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() !== "") {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div className="todo-input-wrapper">
      <input
        type="text"
        placeholder="Add a new task"
        className="todo-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="add-button" onClick={handleAdd}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default TodoInput;
