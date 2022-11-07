import React from "react";

function Footer() {
  return (
    <footer className="mt-4 justify-content-center mnBGSecondary footer fixed-bottom border-top mnBorderPrimary">
      <ul className="row justify-content-center text-center p-0 my-2">
        <li className=" col-md-2 list-group-item">
          <a href="mailto:mariellenwana@gmail.com" className="mnTextDark">
            {" "}
            Email{" "}
          </a>
        </li>
        <li className="col-md-2 list-group-item">
          <a href="https://www.github.com/mnwana" className="mnTextDark">
            {" "}
            GitHub{" "}
          </a>
        </li>
        <li className="col-md-2 list-group-item">
          <a href="https://www.linkedin.com/in/mnwana" className="mnTextDark">
            {" "}
            LinkedIn{" "}
          </a>
        </li>
        <li className="col-md-2 list-group-item">
          <a href="https://www.instagram.com/marntech" className="mnTextDark">
            {" "}
            Instagram{" "}
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
