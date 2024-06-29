import React, { useState, useEffect } from "react";
import axios from "axios";

const PostsList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts)
  
  return (
    <>
    <p>posts lists</p>
    </>
  );
};

export default PostsList;
