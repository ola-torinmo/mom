import React from "react"
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';

function NavbarComp() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className="mt-2">
        <Navbar.Brand as={Link} to="/">Momentum</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Servicepg">All Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/live-in-care">Live In Care</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/daily-services">Daily Services</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/specialist-services">Specialist Services</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className='mb-4'>
            {/* Additional links or content */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;