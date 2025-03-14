import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import Post from "./components/Post";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div>
        <h1>Advanced Routing Example</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<Post />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          >
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
