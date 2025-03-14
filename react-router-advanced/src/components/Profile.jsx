import React from "react";
import { Link, Outlet } from "react-router-dom";

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
      <Outlet /> {/* Nested routes will be rendered here */}
    </div>
  );
}

export default Profile;
