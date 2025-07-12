import React from "react";

const Header = ({ todos }) => {
  const openTasks = todos.filter((todo) => todo.status === "Open").length;
  const tasksPlural = openTasks === 1 ? "" : "s";

  return (
    <div className="header">
      You have <span className="task-count">{openTasks}</span> open task{tasksPlural}
    </div>
  );
};

export default Header;
