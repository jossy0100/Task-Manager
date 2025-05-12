// import React, { useState } from 'react';
// import TaskForm from './components/TaskForm';
// import Task from './components/Task';
// import './App.css';

// function App() {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (text) => {
//     const newTask = {
//       id: Date.now(),
//       text,
//       completed: false,
//     };
//     setTasks([newTask, ...tasks]);
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter(task => task.id !== id));
//   };

//   const toggleComplete = (id) => {
//     setTasks(tasks.map(task =>
//       task.id === id ? { ...task, completed: !task.completed } : task
//     ));
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4 text-center">Task Manager</h2>
//       <TaskForm onAdd={addTask} />
//       {tasks.map(task => (
//         <Task 
//           key={task.id} 
//           task={task} 
//           onDelete={deleteTask} 
//           onToggle={toggleComplete} 
//         />
//       ))}
//     </div>
//   );
// }

// export default App;

// File: src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  const isAuthenticated = localStorage.getItem('authenticated');

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/signin" />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;