import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; // <-- Import CSS

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem('authenticated', true);
    navigate('/dashboard');
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignup} className={`signup-form ${animate ? 'show' : ''}`}>
        <h2 className="signup-title">Sign Up</h2>

        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Register</button>

        <p className="signin-link">
          <a href="/signin">Already have an account?</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;