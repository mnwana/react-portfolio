import React from "react";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

import { formatLanguages } from "../../utils/helpers";

function ModalComponent({ projectSelected, onClose, show }) {
  const {
    title,
    fileName,
    languages,
    description,
    repo,
    deployment,
  } = projectSelected;
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Image
        alt={title}
        src={require(`../../assets/projects/${fileName}`).default}
        className="img-thumbnail rounded mx-auto"
      />
      <Modal.Body className="text-center">
        <p>{description}</p>
        <h6 className="languages">{formatLanguages(languages)}</h6>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-around">
        <div>
          {/* open links in new tabs */}
          {deployment && <a href={deployment} className="mx-2">Deployment</a>}
          <a href={repo} className="mx-2">Repository</a>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
