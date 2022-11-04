import React from "react";

function Nav(props) {
  const { setCurrentPage } = props;
  return (
    <section className="row">
      <h2 className="col-md-2">
        <a
          onClick={() => setCurrentPage("about")}
          href="/"
          className="nav-link"
        >
          Marielle Nwana
        </a>
      </h2>
      <nav className="col-md-10">
        <ul className="flex-row nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-testid="about"
              href="/about"
              onClick={() => setCurrentPage("about")}
            >
              About me
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-testid="projects"
              href="/projects"
              onClick={() => setCurrentPage("projects")}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-testid="resume"
              href="/resume"
              onClick={() => setCurrentPage("resume")}
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-testid="contact"
              href="/contact"
              onClick={() => setCurrentPage("contact")}
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Nav;
