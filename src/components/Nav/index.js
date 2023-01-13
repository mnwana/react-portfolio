import React from "react";
import {navClickEvent} from '../../utils/ga4';

function Nav(props) {
  const { pageSelected, setCurrentPage } = props;
  const aboutActive = pageSelected === "about";
  const resumeActive = pageSelected === "resume";
  const contactActive = pageSelected === "contact";
  const projectsActive = pageSelected === "projects";
  return (
    <section className="row mnBGPrimary p-2 border-bottom border-secondary mnTextDark">
      <h2 className="col-md-3">
        <a
          onClick={() => setCurrentPage("about")}
          href="/#about"
          className="nav-link"
        >
          {`> Marielle Nwana`}
        </a>
      </h2>
      <nav className="col-md-9 " onClick={navClickEvent(pageSelected)}>
        <ul className="flex-row nav mnBGPrimary  justify-content-md-end">
          <li className="nav-item p-2">
            <a
              className={
                "text-decoration-none mnTextDark " +
                (aboutActive ? "nav-active" : "")
              }
              data-testid="about"
              href="#about"
              onClick={() => setCurrentPage("about")}
            >
              {`<About/>`}
            </a>
          </li>
          <li className="nav-item p-2">
            <a
              className={
                "text-decoration-none mnTextDark " +
                (projectsActive ? "nav-active" : "")
              }
              data-testid="projects"
              href="#projects"
              onClick={() => setCurrentPage("projects")}
            >
              {`<Projects/>`}
            </a>
          </li>
          <li className="nav-item p-2">
            <a
              className={
                "text-decoration-none mnTextDark " +
                (resumeActive ? "nav-active" : "")
              }
              data-testid="resume"
              href="#resume"
              onClick={() => setCurrentPage("resume")}
            >
              {`<Resume/>`}
            </a>
          </li>
          <li className="nav-item p-2">
            <a
              className={
                "text-decoration-none mnTextDark " +
                (contactActive ? "nav-active" : "")
              }
              data-testid="contact"
              href="#contact"
              onClick={() => setCurrentPage("contact")}
            >
              {`<Contact Me/>`}
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Nav;
