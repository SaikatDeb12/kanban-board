import React from "react";
import "./Modal.scss";

const Modal = ({ children }) => {
  return (
    <div className="modal">
      <p className="modal-text">{children}</p>
    </div>
  );
};

export default Modal;
