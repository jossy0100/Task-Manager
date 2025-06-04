import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css'; // Import the CSS file here

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('authenticated', true);
    navigate('/dashboard');
  };

  return (
    <div className="signin-container">
      <form
        onSubmit={handleLogin}
        className="signin-form"
      >
        <h2 className="text-center mb-4">Sign In</h2>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

           <div className='options'>
            <label className='remember'>
              <input
                  type='checkbox'
                  name='remember'
                  checked={FormData.remember}
                  onChange={handleChange}
              />
              Remember
            </label>
            <a href='#' className='forget'>Forget Password</a>
          </div>

        </div>
        <button type="submit" className="btn btn-outline-success">
          Login
        </button>

        <p className="text-center mt-4">
          <a href="/signup" className="text-warning">
            Don't have an account? Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;