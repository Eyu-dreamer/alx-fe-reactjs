// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

// Custom hook for checking authentication status
function useAuth() {
  // Simulating an auth check (In real apps, it could come from context or global state)
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated;
}

function ProtectedRoute({ element, isAuthenticated }) {
  const isUserAuthenticated = useAuth();

  if (!isUserAuthenticated) {
    // If not authenticated, redirect to login
    return <Navigate to="/login" />;
  }

  return element;
}

export default ProtectedRoute;
