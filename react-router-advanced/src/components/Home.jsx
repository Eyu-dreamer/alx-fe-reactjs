import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <nav>
        <ul>
          <li>
            <Link to="/profile">Go to Profile</Link>
          </li>
          <li>
            <Link to="/post/1">Go to Post 1</Link>
          </li>
          <li>
            <Link to="/post/2">Go to Post 2</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
