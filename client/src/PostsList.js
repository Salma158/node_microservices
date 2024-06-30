import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

const PostsList = () => {
  const [posts, setPosts] = useState([]);

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
      <h2 className="text-center">Posts List</h2>
      {posts.map((post) => (
        <Card key={post.id} className="mb-4">
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </>

  );
};

export default PostsList;
