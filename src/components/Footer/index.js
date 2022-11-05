import React from "react";

function Footer() {
  return (<footer className="mt-4 justify-content-center bg-secondary footer fixed-bottom">
            <ul className="row justify-content-center text-center p-0">
          <li className="col-md-2 list-group-item">
            <a href="mailto:mariellenwana@gmail.com" className="text-dark"> Email </a>
          </li>
          <li className="col-md-2 list-group-item">
            <a href="https://www.github.com/mnwana" className="text-dark"> GitHub </a>
          </li>
          <li className="col-md-2 list-group-item">
            <a href="https://www.linkedin.com/in/mnwana" className="text-dark"> LinkedIn </a>
          </li>
          <li className="col-md-2 list-group-item">
            <a href="https://www.instagram.com/marntech" className="text-dark"> Instagram </a>
          </li>
        </ul>
  </footer> );
}

export default Footer;
