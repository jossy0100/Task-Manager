import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, done: false }]);
      setInput('');
    }
  };

  const toggleDone = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2 className="dashboard-title">My Task Manager</h2>
        <Link to="/about" className="about-link">About</Link>
      </div>

      <div className="task-input-group">
        <input
          className="task-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
        />
        <button className="add-btn" onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`task-item ${task.done ? 'task-done' : ''}`}
          >
            <span
              className="task-text"
              onClick={() => toggleDone(index)}
            >
              {task.text}
            </span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;