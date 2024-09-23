import React, { useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const TaskInput = ({ todos, setTodos }) => {
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("low");

  const addTodo = () => {
    if (input.trim()) {
      const newTodo = { text: input.trim(), completed: false, priority, show: true };
      const newTodos = [...todos, newTodo];
      newTodos.sort((a, b) => {
        const priorityOrder = { high: 1, medium: 2, low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      });
      setTodos(newTodos);
      setInput("");
      localStorage.setItem("todos", JSON.stringify(newTodos));
      toast.success("Task added!");
    }
  };

  return (
    <div className="flex space-x-2 mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
        className="px-2 p-2 border rounded-md flex-grow py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="px-2 p-2 border rounded-md py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button onClick={addTodo} className="p-2 bg-blue-500 text-white rounded-md">
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;

<ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light" // or "dark"
/>
