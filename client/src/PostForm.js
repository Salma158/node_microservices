import React, { useState } from "react";
import axios from "axios";
import { Form, FormControl, Button, Card } from "react-bootstrap";

const PostForm = () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:4000/posts", {
      title,
    });

    setTitle("");
  };

  return (<Card className="mb-5">
    <Card.Body>
      <Card.Title>Add Post</Card.Title>
      <Form onSubmit={onSubmit}>
        <h2 className="text-center"></h2>
        <Form.Group>
          <FormControl
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="mb-3"
          />
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Card.Body>
  </Card>
  );
};

export default PostForm;
