import PostForm from './PostForm'
import PostsList from './PostsList'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <PostForm />
          <PostsList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
