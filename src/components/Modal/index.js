import React from "react";

import { formatLanguages } from "../../utils/helpers";

function Modal({ projectSelected, onClose }) {
  const {
    title,
    fileName,
    languages,
    description,
    repo,
    liveDeploy,
  } = projectSelected;
  return (
    <div className="modalBackdrop">
      <div className="modalContainer col-md-6 bg-primary">
        <h3 className="modal-header">{title} </h3>
        <h4 className="modal-title">{formatLanguages(languages)}</h4>
        <img
          alt={title}
          src={require(`../../assets/projects/${fileName}`).default}
          className="img-thumbnail rounded mx-1"
        />
        <p className="modal-body">{description}</p>
        <a href={liveDeploy} className="text-dark"> Deployment</a>
        <a href={repo} className="text-dark"> Repository</a>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
