import React from "react";

function Modal({ projectSelected, onClose }) {
  const { title, fileName, languages, description, repo } = projectSelected;
  return (
    <div className="modalBackdrop">
      <div className="modalContainer col-md-6 bg-primary">
        <h3 className="modal-header">{title} </h3>
        <h4 className="modal-title">{languages}</h4>
        <img
          alt={title}
          src={require(`../../assets/projects/${fileName}`).default}
          className="img-thumbnail rounded mx-1"
        />
        <p className="modal-body">{description}</p>
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
