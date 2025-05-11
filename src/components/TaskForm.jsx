import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TaskForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;

    const newTask = {
      id: uuidv4(),
      text: taskText,
      completed: false,
    };

    addTask(newTask);
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">Add</button>
      </div>
    </form>
  );
}

export default TaskForm;