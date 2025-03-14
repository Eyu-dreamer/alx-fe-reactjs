// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute component
import Login from "./components/Login"; // Import the Login component

function App() {
  // Simulate authentication state (can be from context or global state in a real app)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated on initial load
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    // Simulate a login action
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true"); // Save the login state
  };

  const handleLogout = () => {
    // Simulate a logout action
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated"); // Remove login state
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />

          {/* Use ProtectedRoute for the Profile route */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute
                element={<Profile />}
                isAuthenticated={isAuthenticated}
              />
            }
          />

          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
      </div>
    </Router>
  );
}

export default App;
