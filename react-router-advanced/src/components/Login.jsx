// src/components/Login.jsx
import React, { useState } from "react";

function Login() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Simulate login
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", true); // Store authentication status
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
