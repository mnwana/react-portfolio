import React from "react";
import { footerClickEvent } from "../../utils/ga4";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function FooterComponent() {
  return (
    <footer className="sticky-bottom bg-light">
      <Container>
          <Nav className="d-flex justify-content-around" onClick={() => footerClickEvent()}>
            <Nav.Link href="mailto:mariellenwana@gmail.com" data-testid="email">
              Email
            </Nav.Link>
            <Nav.Link href="https://www.github.com/mnwana" data-testid="github">
              Github
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/mnwana" data-testid="linkedin">
              LinkedIn
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/marntech" data-testid="instagram">
              Instagram
            </Nav.Link>
          </Nav>
      </Container>
      {/* <ul
        className="row"
        onClick={() => footerClickEvent()}
      >
        <li className="list-group-item">
          <a href="mailto:mariellenwana@gmail.com" className="mnTextDark">
            {" "}
            Email{" "}
          </a>
        </li>
        <li className="list-group-item">
          <a href="https://www.github.com/mnwana" className="mnTextDark">
            {" "}
            GitHub{" "}
          </a>
        </li>
        <li className="list-group-item">
          <a href="https://www.linkedin.com/in/mnwana" className="mnTextDark">
            {" "}
            LinkedIn{" "}
          </a>
        </li>
        <li className="list-group-item">
          <a href="https://www.instagram.com/marntech" className="mnTextDark">
            {" "}
            Instagram{" "}
          </a>
        </li>
      </ul>
  <div>
    <span>&copy; 2023 Marielle Nwana.</span>
  </div> */}
    </footer>
  );
}

export default FooterComponent;
