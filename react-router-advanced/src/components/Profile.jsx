// src/components/Profile.jsx
import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom"; // Add Routes and Route imports

// Import nested components
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <ul>
          <li>
            <Link to="details">Profile Details</Link>
          </li>
          <li>
            <Link to="settings">Profile Settings</Link>
          </li>
        </ul>
      </nav>
      <hr />

      {/* Nested routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>

      {/* This is where nested routes will be displayed */}
      <Outlet />
    </div>
  );
}

export default Profile;
