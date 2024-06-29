import React, { useState } from "react";
import axios from "axios";
import { Form, FormControl, Button, Container, Row, Col } from "react-bootstrap";

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
    <Container fluid className="d-flex vh-100">
      <Row className="justify-content-center align-items-center w-100">
        <Col xs={12} md={6}>
          <Form onSubmit={onSubmit}>
          <h1 className="text-center">Add Post</h1>
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
        </Col>
      </Row>
    </Container>
  );
};

export default PostCreate;
