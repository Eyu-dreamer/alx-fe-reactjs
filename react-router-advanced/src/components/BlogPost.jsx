// src/components/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams(); // Get the dynamic id from the URL

  // You can use the id to fetch the blog post from an API or display the content
  return (
    <div>
      <h2>Blog Post ID: {id}</h2>
      <p>Here is the content for the blog post with ID: {id}.</p>
      {/* You can replace the above line with a fetch request to get data from an API */}
    </div>
  );
}

export default BlogPost;
