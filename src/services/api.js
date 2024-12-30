import axios from 'axios';

// Base API URL
const API_URL = 'https://project-2rb4.onrender.com/admin';

// Axios instance
const api = axios.create({
  baseURL: API_URL,
});

// Handle Admin Login
export const loginAdmin = async (credentials) => {
  try {
    const response = await api.post('/login', credentials);
    return response.data; // Returns token or other data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed!');
  }
};

// Add New Admin
export const addAdmin = async (adminData, token) => {
  try {
    const response = await api.post('/add-admin', adminData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to add admin!');
  }
};

// Get All Users
export const getUsers = async (token) => {
  try {
    const response = await api.get('/getusers', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch users!');
  }
};

// Update User Status
export const updateUserStatus = async (userId, status, token) => {
  try {
    const response = await api.put(`/updateUserStatus/${userId}`, status, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update status!');
  }
};
