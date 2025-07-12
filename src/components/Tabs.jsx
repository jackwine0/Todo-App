import React from 'react';

const tabLabels = ["All", "Open", "Completed", "Archived"];

const Tabs = ({ todos, onTabClick, activeTab }) => {
  const counts = {
    All: todos.length,
    Open: todos.filter(todo => todo.status === "Open").length,
    Completed: todos.filter(todo => todo.status === "Completed").length,
    Archived: todos.filter(todo => todo.status === "Archived").length,
  };

  return (
    <div className="tabs">
      {tabLabels.map((label) => (
        <button
          key={label}
          className={`tab-button ${activeTab === label ? "active" : ""}`}
          onClick={() => onTabClick(label)}
        >
          {label} ({counts[label]})
        </button>
      ))}
    </div>
  );
};

export default Tabs;
