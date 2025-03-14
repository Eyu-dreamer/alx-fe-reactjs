import React from "react";
import { Navigate } from "react-router-dom";

// Simulate authentication check
const isAuthenticated = false;

function PrivateRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/" />;
}

export default PrivateRoute;
