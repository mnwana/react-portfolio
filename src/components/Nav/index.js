import React from "react";

function Nav(props) {
  const { pageSelected, setCurrentPage } = props;
  return (
    <section>
      <h2>Marielle Nwana</h2>
      <nav>
        <ul className="flex-row">
          <li>
            <a
              data-testid="about"
              href="#about"
              onClick={() => setCurrentPage("about")}
            >
              About me
            </a>
          </li>
          <li>
            <a
              data-testid="projects"
              href="#projects"
              onClick={() => setCurrentPage("projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              data-testid="resume"
              href="#resume"
              onClick={() => setCurrentPage("resume")}
            >
              Resume
            </a>
          </li>
          <li>
            <a
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
