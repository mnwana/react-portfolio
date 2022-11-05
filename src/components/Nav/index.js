import React from "react";

function Nav(props) {
  const { setCurrentPage } = props;
  return (
    <section className="row bg-primary p-2 border-bottom border-secondary">
      <h2 className="col-md-3">
        <a
          onClick={() => setCurrentPage("about")}
          href="/#about"
          className="nav-link"
        >
          {`> Marielle Nwana`}
        </a>
      </h2>
      <nav className="col-md-9">
        <ul className="flex-row nav  justify-content-md-end ">
          <li className="nav-item">
            <a
              className="nav-link  text-dark"
              data-testid="about"
              href="#about"
              onClick={() => setCurrentPage("about")}
            >
              {`<About/>`}
            </a>
          </li>
          <li className="nav-item ">
            <a
              className="nav-link text-dark"
              data-testid="projects"
              href="#projects"
              onClick={() => setCurrentPage("projects")}
            >
              {`<Projects/>`}
            </a>
          </li>
          <li className="nav-item ">
            <a
              className="nav-link text-dark"
              data-testid="resume"
              href="#resume"
              onClick={() => setCurrentPage("resume")}
            >
              {`<Resume/>`}
            </a>
          </li>
          <li className="nav-item ">
            <a
              className="nav-link text-dark"
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
