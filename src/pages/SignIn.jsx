import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-dark text-light">
      <form
        onSubmit={handleLogin}
        className="bg-secondary bg-opacity-75 text-white p-5 rounded shadow"
        style={{ width: '100%', maxWidth: '400px' }}
      >
        <h2 className="text-center mb-4 fw-bold">Sign In</h2>

        <div className="mb-3">
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" class="btn btn-outline-success">Login</button>

        <p className="text-center mt-4">
          <a href="/signup" className="text-warning">Don't have an account?</a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;