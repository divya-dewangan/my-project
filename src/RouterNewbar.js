import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function RouterNewbar() {
  return (
    <>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/input-task'>Input Task</Nav.Link>
            <Nav.Link as={Link} to='/name-task'>Name Task</Nav.Link>
            <Nav.Link as={Link} to='/form-vlidation'>From Validation</Nav.Link>
            <Nav.Link as={Link} to='/RagistrationValidationTask'>Ragistration Validation</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default RouterNewbar