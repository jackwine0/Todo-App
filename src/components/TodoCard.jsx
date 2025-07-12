import React from "react";

const TodoCard = ({ todo, onUpdateStatus, onDelete }) => {
  if (!todo) return <div>No todo available</div>;

  return (
    <div className={`todo-card ${todo.status.toLowerCase()}`}>
      <h3>{todo.text}</h3>
      <p className="todo-status">Status: {todo.status}</p>

      <div className="todo-card-actions">
        {todo.status !== "Completed" && (
          <button className="complete-button" onClick={() => onUpdateStatus(todo.id, "Completed")}>
            Done
          </button>
        )}
        {todo.status !== "Archived" && (
          <button className="archive-button" onClick={() => onUpdateStatus(todo.id, "Archived")}>
            Archive
          </button>
        )}
        {(todo.status === "Archived" || todo.status === "Completed") && (
          <button className="edit-button" onClick={() => onUpdateStatus(todo.id, "Open")}>
            Reopen
          </button>
        )}
        <button className="delete-button" onClick={() => onDelete(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
