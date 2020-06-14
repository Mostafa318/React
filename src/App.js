import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Navbar,
//   Nav,
//   Button,
//   NavItem,
//   Dropdown,
//   NavDropdown,
//   Form,
//   FormControl
// } from "react-bootstrap";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
// import { LinkContainer } from "react-router-bootstrap";
// import Navbar from "./containers/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App container">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Matrix</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="login">Register</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="login">Sign In</NavDropdown.Item>
              <NavDropdown.Item href="login">Sign Up</NavDropdown.Item>
              <NavDropdown.Item href="/">Home</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/test">Testing Gif</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="https://react-bootstrap.github.io/">
              More deets
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
