import React from "react";
import { navClickEvent } from "../../utils/ga4";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavComponent(props) {
  const { pageSelected, setCurrentPage } = props;
  return (
    <Navbar bg="light" expand="lg" onClick={() => navClickEvent(pageSelected)}>
      <Container>
        <Navbar.Brand href="/#about" onClick={() => setCurrentPage("about")}>
          Marielle Nwana
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#about"
              data-testid="about"
              onClick={() => setCurrentPage("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#projects"
              data-testid="projects"
              onClick={() => setCurrentPage("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#resume"
              data-testid="resume"
              onClick={() => setCurrentPage("resume")}
            >
              Resume
            </Nav.Link>
            <Nav.Link
              href="#contact"
              data-testid="contact"
              onClick={() => setCurrentPage("contact")}
            >
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComponent;
