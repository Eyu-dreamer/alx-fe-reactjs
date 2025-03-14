// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
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
          <Route
            path="/profile/*"
            element={<ProtectedRoute element={<Profile />} />}
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
