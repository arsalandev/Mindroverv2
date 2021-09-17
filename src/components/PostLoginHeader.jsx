import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsCloudUpload } from "react-icons/bs";
import "./css/header.css";

const PostLoginHeader = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className="me-auto">
              <div className={`sidebar`}>
                <div className="sidebar-header">
              <button>click</button>
              </div>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ul>
              </div>
              <div className="sidebar-toggle">
              <Nav.Link href="">
                <label htmlFor="file-input">
                  <BsCloudUpload style={{ color: "white" }} /> Upload Image
                </label>
                <input
                  style={{ display: "none" }}
                  id="file-input"
                  type="file"
                />
              </Nav.Link>
              </div>
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


