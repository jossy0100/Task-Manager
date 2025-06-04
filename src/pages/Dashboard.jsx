import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [reminderMinutes, setReminderMinutes] = useState('');

  const addTask = () => {
    if (input.trim()) {
      const reminderSeconds = parseInt(reminderMinutes) * 60;
      const task = {
        text: input,
        done: false,
        createdAt: new Date(),
        duration: 0,
        running: false,
        timer: null,
        reminder: isNaN(reminderSeconds) ? null : reminderSeconds,
        remainingTime: isNaN(reminderSeconds) ? null : reminderSeconds,
        reminderTimer: null,
        alerted: false,
      };

      if (!isNaN(reminderSeconds)) {
        task.reminderTimer = setInterval(() => {
          setTasks((prev) => {
            const updated = [...prev];
            if (updated.length > 0 && updated[updated.length - 1].remainingTime > 0) {
              updated[updated.length - 1].remainingTime -= 1;
              if (updated[updated.length - 1].remainingTime <= 0 && !updated[updated.length - 1].alerted) {
                updated[updated.length - 1].alerted = true;
                alert(`Reminder: "${updated[updated.length - 1].text}" is due!`);
              }
            }
            return updated;
          });
        }, 1000);
      }

      setTasks((prev) => [...prev, task]);
      setInput('');
      setReminderMinutes('');
    }
  };

  const toggleDone = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    if (tasks[index].timer) clearInterval(tasks[index].timer);
    if (tasks[index].reminderTimer) clearInterval(tasks[index].reminderTimer);
    setTasks(updated);
  };

  const toggleTimer = (index) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task, i) => {
        if (i === index) {
          if (task.running) {
            clearInterval(task.timer);
            return { ...task, running: false, timer: null };
          } else {
            const timer = setInterval(() => {
              setTasks((prev) => {
                const newTasks = [...prev];
                newTasks[index].duration += 1;
                return newTasks;
              });
            }, 1000);
            return { ...task, running: true, timer };
          }
        }
        return task;
      });
    });
  };

  useEffect(() => {
    return () => {
      tasks.forEach(task => {
        if (task.timer) clearInterval(task.timer);
        if (task.reminderTimer) clearInterval(task.reminderTimer);
      });
    };
  }, [tasks]);

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
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
        <input
          className="reminder-input"
          type="number"
          placeholder="Reminder (mins)"
          value={reminderMinutes}
          onChange={(e) => setReminderMinutes(e.target.value)}
        />
        <button className="add-btn" onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`task-item ${task.done ? 'task-done' : ''} ${task.alerted ? 'task-alert' : ''}`}
          >
            <span
              className="task-text"
              onClick={() => toggleDone(index)}
            >
              {task.text}
            </span>
            <div className="task-controls">
              <span className="task-time">{formatDuration(task.duration)}</span>
              {task.reminder !== null && (
                <span className="reminder-timer">
                  ⏰ {formatDuration(task.remainingTime)}
                </span>
              )}
              <button className="btn-sm btn-warning" onClick={() => toggleTimer(index)}>
                {task.running ? 'Pause' : 'Start'} Timer
              </button>
              <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;