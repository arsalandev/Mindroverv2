import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsCloudUpload } from "react-icons/bs";
import "./css/header.css";

const PostLoginHeader = () =>{
    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">
                  <BsCloudUpload style={{ color: "white" }} /> Upload Image
                </Nav.Link>
              </Nav>
              <Nav>
                <NavDropdown
                  title="Username"
                  id="collasible-nav-dropdown"
                  className="secoundnav"
                >
                  <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/login">
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
    );
};

export default PostLoginHeader;