// Accountpage.js

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const AccountPage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    setUser(null); // Clear user context
    navigate('/'); // Redirect to login page
  };

  if (!user) {
    return <h3 className="text-center">Please log in to view account details.</h3>;
  }

  return (
    <div className="form-container">
      <h2 className="text-center mb-4">Account Details</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <button className="btn btn-danger w-100 mt-4" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default AccountPage;