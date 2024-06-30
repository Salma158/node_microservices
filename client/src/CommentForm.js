import React, { useState } from "react";
import axios from "axios";
import { Form, FormControl, Button } from "react-bootstrap";

const CommentForm = ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent("");
  };

  return (
    <Form onSubmit={onSubmit} className="mb-5">
      <h4 className="text-center">New Comment</h4>
      <Form.Group>
        <FormControl
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mb-3"
        />
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default CommentForm;
