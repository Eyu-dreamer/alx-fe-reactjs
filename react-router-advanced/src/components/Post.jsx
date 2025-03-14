import React from "react";
import { useParams } from "react-router-dom";

function Post() {
  const { postId } = useParams(); // Fetch the dynamic parameter from the URL

  return <h3>Viewing Post {postId}</h3>;
}

export default Post;
