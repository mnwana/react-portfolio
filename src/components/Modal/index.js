import React from "react";

function Modal({ projectSelected, showModal, onClose }) {
  const { title, fileName, languages, description, repo } = projectSelected;
    return (
      <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{title} </h3>
          <img
            alt={title}
            src={require(`../../assets/projects/${fileName}`).default}
            className="img-thumbnail rounded mx-1"
          />
          <p>{description}</p>
          <button type="button" onClick={onClose}>
            Close this modal
          </button>
        </div>
      </div>
    );
}

export default Modal;
