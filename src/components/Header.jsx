import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./css/header.css";
// import { BsCloudUpload } from "react-icons/bs";

const Header = () => {


  return (
    <Navbar collapseOnSelect expand="lg" className="cutomized-nav">
    <Container fluid>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <NavDropdown title="Themes" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1" className="">
              <Nav.Link style={{ color: "Black" }}>Theme 1</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" className="">
            <Nav.Link style={{ color: "Black" }}>Theme 2</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" className="">
            <Nav.Link style={{ color: "Black" }}>Theme 3</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
          {/* <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link> */}
          <Nav.Link as={Link} to="/signup">
            Sign Up
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
