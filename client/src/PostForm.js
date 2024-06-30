import React, { useState } from "react";
import axios from "axios";
import { Form, FormControl, Button} from "react-bootstrap";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:4000/posts", {
      title,
    });

    setTitle("");
  };

  return (
          <Form onSubmit={onSubmit} className="mb-5">
            <h2 className="text-center">Add Post</h2>
            <Form.Group>
              <FormControl
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
                className="mb-3"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
  );
};

export default PostCreate;
