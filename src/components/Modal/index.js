import React from "react";

import { formatLanguages } from "../../utils/helpers";

function Modal({ projectSelected, onClose }) {
  const {
    title,
    fileName,
    languages,
    description,
    repo,
    deployment,
  } = projectSelected;
  return (
    <div className="modalBackdrop">
      <div className="modalContainer col-md-6 mnBGPrimary">
        <h3 className="modal-header">{title} </h3>
        <img
          alt={title}
          src={require(`../../assets/projects/${fileName}`).default}
          className="img-thumbnail rounded mx-auto"
        />
        <h6 className="modal-title mt-2">{formatLanguages(languages)}</h6>
        <p className="modal-body mt-2">{description}</p>
        <div className="row justify-content-start">
          {deployment && (
            <a href={deployment} className="mnTextDark col-md-2">
              Deployment
            </a>
          )}
          <a href={repo} className="mnTextDark col-md-2">
            Repository
          </a>
        </div>

        <div class="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
