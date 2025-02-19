import React from 'react';
import { Navigate } from 'react-router-dom';

// Function to check if user is authenticated
const isAuthenticated = () => {
  const token = localStorage.getItem('token'); // Check if token exists in localStorage
  return token ? true : false;
};

// Protected Route Component
const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
