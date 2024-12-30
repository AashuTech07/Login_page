import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username || 'Guest'; 

  const handleLogout = () => {
   
    navigate('/admin-login'); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome, {username}!</h1>
      <p>You have successfully logged in to the admin dashboard.</p>
      <button 
        onClick={handleLogout} 
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          background: '#74ebd5',
          border: 'none',
          borderRadius: '5px',
          color: 'white',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
