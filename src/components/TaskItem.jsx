import React from 'react';

function TaskItem({ task, deleteTask, toggleComplete }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
        onClick={() => toggleComplete(task.id)}
      >
        {task.text}
      </span>
      <button className="btn btn-sm btn-danger" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;