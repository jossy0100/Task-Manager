import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => (
  <div className="about-container">
    <h2 className="about-title">About This App</h2>
    <p className="about-text">
      This is a simple and stylish task manager app built with React. It allows you to:
    </p>
    <ul className="about-list">
      <li>Sign up and sign in (with simulated authentication)</li>
      <li>Add, complete, and delete tasks</li>
      <li>Enjoy a clean, mobile-friendly UI</li>
      <li>It helps you set a reminder as well as track your task</li>
    </ul>

    <div className="back-link-container">
      <Link to="/dashboard" className="back-link">← Back to Dashboard</Link>
    </div>
  </div>
);

export default About;