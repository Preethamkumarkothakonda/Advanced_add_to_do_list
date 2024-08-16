import React, { useState } from "react";

const Task = ({ task, toggleTaskCompleted, deleteTask, editTask }) => {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(task.id, newName);
    setNewName("");
    setEditing(false);
  };

  const viewTemplate = (
    <div className="task-view">
      <input
        id={task.id}
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompleted(task.id)}
      />
      <label htmlFor={task.id}>{task.name}</label>
      <button onClick={() => setEditing(true)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );

  const editTemplate = (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newName} onChange={handleChange} />
      <button type="submit">Save</button>
      <button onClick={() => setEditing(false)}>Cancel</button>
    </form>
  );

  return <div className="task">{isEditing ? editTemplate : viewTemplate}</div>;
};

export default Task;
