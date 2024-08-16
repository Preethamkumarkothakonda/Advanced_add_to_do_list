import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, toggleTaskCompleted, deleteTask, editTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task
            task={task}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
