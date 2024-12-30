import React, { useEffect, useState } from 'react';
import { getUsers, addAdmin, updateUserStatus } from '../services/api';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers(token); // Calls API
        setUsers(data.users || data); // Adjust based on API response structure
      } catch (err) {
        setError(err.message || 'Failed to load users.');
      }
    };
    fetchUsers();
  }, [token]);
  

  const handleAddAdmin = async () => {
    const newAdmin = {
      username: 'newadmin',
      password: 'password123'
    };
  
    try {
      const response = await addAdmin(newAdmin, token); // Calls API
      alert(response.message || 'Admin added successfully!');
    } catch (err) {
      setError(err.message || 'Failed to add admin.');
    }
  };
  

  const handleUpdateStatus = async (id) => {
    const newStatus = { active: true }; // Example payload
    try {
      await updateUserStatus(id, newStatus, token);
      alert('User status updated successfully!');
    } catch (err) {
      setError(err.message || 'Failed to update status.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Dashboard</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleAddAdmin}>Add New Admin</button>
      <h2>Users:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.status}
            <button onClick={() => handleUpdateStatus(user.id)}>Activate</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
