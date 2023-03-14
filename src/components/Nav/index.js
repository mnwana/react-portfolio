import React from "react";
import { navClickEvent } from "../../utils/ga4";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useHref } from "react-router-dom";

// fix href and links to save location

function NavComponent(props) {
  return (
    <Navbar bg="light" expand="lg" onClick={() => navClickEvent(useHref)}>
      <Container>
        <Navbar.Brand href="about">Marielle Nwana</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="about" data-testid="about">
              About
            </Nav.Link>
            <Nav.Link href="projects" data-testid="projects">
              Projects
            </Nav.Link>
            <Nav.Link href="resume" data-testid="resume">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComponent;
