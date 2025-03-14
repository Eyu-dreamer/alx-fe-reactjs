// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

// A simple ProtectedRoute component that will check if a user is authenticated
function ProtectedRoute({ element, isAuthenticated }) {
  if (!isAuthenticated) {
    // Redirect the user to the login page (or any other page you wish)
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the requested element (e.g., Profile component)
  return element;
}

export default ProtectedRoute;
