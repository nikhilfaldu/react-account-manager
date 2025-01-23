// Loginpage.js

import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';


const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (
      registeredUser &&
      credentials.email === registeredUser.email &&
      credentials.password === registeredUser.password
    ) {
      setUser({ email: credentials.email });
      navigate('/account'); // Redirect to the account page
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
      <p className="text-center mt-3">
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default LoginPage;