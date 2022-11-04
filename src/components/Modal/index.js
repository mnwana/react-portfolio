import React from "react";

function Modal({ projectSelected, showModal, onClose }) {
  const { title, fileName, languages, description, repo } = projectSelected;
    return (
      <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle ">{title} </h3>
          <h4>{languages}</h4>
          <img
            alt={title}
            src={require(`../../assets/projects/${fileName}`).default}
            className="img-thumbnail rounded mx-1"
          />
          <p>{description}</p>
          <button type="button" onClick={onClose} className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    );
}

export default Modal;
