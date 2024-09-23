
import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true"; // If saved as "true", dark mode is on
  });

  // Todos and Filters state
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState("all");
  const [filterPri, setFilterPri] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  // Effect to filter tasks whenever todos, filter, or priority changes
  useEffect(() => {
    let updatedTodos = todos.map((todo) => {
      todo.show = true;

      // Handle the 'all', 'active', 'completed' filters
      if (filter === "active") {
        todo.show = !todo.completed;
      } else if (filter === "completed") {
        todo.show = todo.completed;
      }

      // Handle the priority filters
      if (filterPri === "high" && todo.show) {
        todo.show = todo.priority === "high";
      } else if (filterPri === "medium" && todo.show) {
        todo.show = todo.priority === "medium";
      } else if (filterPri === "low" && todo.show) {
        todo.show = todo.priority === "low";
      }

      return todo;
    });

    setFilteredTodos(updatedTodos);
  }, [todos, filter, filterPri]);

  // Effect to toggle dark mode in localStorage and HTML element
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Toggle theme handler
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`min-h-screen transition-all ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto p-10">
        {/* Header with Toggle Theme button */}
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-3xl">To-Do List App</h1>
          <button
            onClick={toggleTheme}
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>

        {/* TaskInput, TaskFilter, and TaskList components */}
        <TaskInput todos={todos} setTodos={setTodos} />
        <TaskFilter
          todos={todos}
          setTodos={setTodos}
          setFilter={setFilter}
          setFilterPri={setFilterPri}
        />
        <TaskList todos={filteredTodos} setTodos={setTodos} />

        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
        