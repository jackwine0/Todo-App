import React from 'react';
import TodoCard from './TodoCard';

const TodoList = ({ todos, onUpdateStatus, onDelete }) => {
  if (!todos || todos.length === 0) return <div className="empty-list">No todos available</div>;

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          onUpdateStatus={onUpdateStatus}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
