import React from "react";
import { footerClickEvent } from "../../utils/ga4";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

// fix footer stickiness

function FooterComponent() {
  return (
    <footer className="sticky-bottom bg-light">
      <Container>
        <Nav
          className="d-flex justify-content-around"
          onClick={() => footerClickEvent()}
        >
          <Nav.Link href="mailto:mariellenwana@gmail.com" data-testid="email">
            Email
          </Nav.Link>
          <Nav.Link href="https://www.github.com/mnwana" data-testid="github">
            Github
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/mnwana"
            data-testid="linkedin"
          >
            LinkedIn
          </Nav.Link>
          <Nav.Link
            href="https://www.instagram.com/marntech"
            data-testid="instagram"
          >
            Instagram
          </Nav.Link>
        </Nav>
      </Container>
    </footer>
  );
}

export default FooterComponent;
