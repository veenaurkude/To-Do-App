
import React from "react";
import { motion } from "framer-motion";

const TaskItem = ({ todo, index, setTodos, todos }) => {
  const toggleComplete = () => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const deleteTodo = () => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <motion.li
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className={`flex items-center p-2 border rounded-md ${todo.priority === "high" ? "border-red-500" : todo.priority === "medium" ? "border-yellow-500" : "border-green-500"}`}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleComplete}
        className="mr-2"
      />
      <span
        className={`flex-grow ${todo.completed ? "line-through" : ""}`}
      >
        {todo.text} ({todo.priority})
      </span>
      <button onClick={deleteTodo} className="ml-2 p-1 bg-red-500 text-white rounded-md">
        Delete
      </button>
    </motion.li>
  );
};

export default TaskItem;
