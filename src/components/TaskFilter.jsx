
import React from "react";
import { toast } from "react-toastify";

const TaskFilter = ({ setFilter, setFilterPri, todos, setTodos }) => {
  // Function to delete all tasks
  const deleteAllTodos = () => {
    setTodos([]); // Clear todos state
    localStorage.setItem("todos", JSON.stringify([])); // Clear localStorage
    toast.info("All tasks have been deleted!"); // Show a notification
  };

  return (
    <div className="flex justify-between mb-4">
      {/* Task filter dropdown */}
      <div className="flex space-x-2">
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="px-2 py-1 border rounded-md dark:bg-gray-800 dark:border-gray-600"
        >
          <option value="all">All Tasks</option>
          <option value="active">Active Tasks</option>
          <option value="completed">Completed Tasks</option>
        </select>
      </div>

      {/* Priority filter dropdown */}
      <div className="flex space-x-2">
        <select
          onChange={(e) => setFilterPri(e.target.value)}
          className="px-2 py-1 border rounded-md dark:bg-gray-800 dark:border-gray-600"
        >
          <option value="all">All Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      {/* Delete All button */}
      <div>
        <button
          onClick={deleteAllTodos}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Delete All
        </button>
      </div>
    </div>
  );
};

export default TaskFilter;
