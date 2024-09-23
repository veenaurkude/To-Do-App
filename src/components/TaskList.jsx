import React from "react";
import TaskItem from "./TaskItem";
import { AnimatePresence } from "framer-motion";

const TaskList = ({ todos, setTodos }) => {
  return (
    <ul className="space-y-2">
      <AnimatePresence>
        {todos.map((todo, index) => (
          todo.show && (
            <TaskItem
              key={index}
              todo={todo}
              index={index}
              setTodos={setTodos}
              todos={todos}
            />
          )
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default TaskList;
