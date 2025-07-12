import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

const App = () => {
  // Initialize state directly from localStorage
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem("todos");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeTab, setActiveTab] = useState("All");
  const [darkMode, setDarkMode] = useState(() => {
    // Check user's preferred color scheme
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem("darkMode");
      return savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Persist todos and dark mode to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [todos, darkMode]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      status: "Open",
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const updateStatus = (id, newStatus) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, status: newStatus } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const filteredTodos =
    activeTab === "All"
      ? todos
      : todos.filter((todo) => todo.status === activeTab);

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <button 
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
      
      <Header todos={todos} />
      <Tabs todos={todos} activeTab={activeTab} onTabClick={setActiveTab} />
      <TodoList
        todos={filteredTodos}
        onUpdateStatus={updateStatus}
        onDelete={deleteTodo}
      />
      <TodoInput addTodo={addTodo} />
    </div>
  );
};

export default App;