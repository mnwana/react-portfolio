import React from "react";

function Nav(props) {
  const { setCurrentPage } = props;
  return (
    <section className="row bg-primary">
      <h2 className="col-md-3">
        <a
          onClick={() => setCurrentPage("about")}
          href="/"
          className="nav-link"
        >
          Marielle Nwana
        </a>
      </h2>
      <nav className="col-md-9">
        <ul className="flex-row nav">
          <li className="nav-item">
            <a
              className="nav-link  text-dark"
              data-testid="about"
              href="#about"
              onClick={() => setCurrentPage("about")}
            >
              About me
            </a>
          </li>
          <li className="nav-item ">
            <a
              className="nav-link text-dark"
              data-testid="projects"
              href="#projects"
              onClick={() => setCurrentPage("projects")}
            >
              Projects
            </a>
          </li>
          <li className="nav-item ">
            <a
              className="nav-link text-dark"
              data-testid="resume"
              href="#resume"
              onClick={() => setCurrentPage("resume")}
            >
              Resume
            </a>
          </li>
          <li className="nav-item ">
            <a
              className="nav-link text-dark"
              data-testid="contact"
              href="#contact"
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
