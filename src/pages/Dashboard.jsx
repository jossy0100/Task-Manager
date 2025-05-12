import React, { useState } from 'react';

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
    <div className="container py-5">
      <h2 className="text-center mb-4">My Task Manager</h2>
      <div className="input-group mb-3">
        <input
          className="form-control"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
        />
        <button className="btn btn-primary" onClick={addTask}>Add</button>
      </div>

      <ul className="list-group">
        {tasks.map((task, index) => (
          <li key={index} className={`list-group-item d-flex justify-content-between ${task.done ? 'text-decoration-line-through' : ''}`}>
            <span onClick={() => toggleDone(index)} style={{ cursor: 'pointer' }}>{task.text}</span>
            <button className="btn btn-sm btn-danger" onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;