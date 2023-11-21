import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated (e.g., by checking the presence of a token)
    const token = localStorage.getItem('token'); // You may need to adjust this based on your storage method
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Component /> : <Navigate to="/" />}
    />
  );
};

export default ProtectedRoute;
