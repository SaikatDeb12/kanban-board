import React from "react";
import "./Modal.scss";

const Modal = ({ onClose, children }) => {
  return (
    <div
      className="modal"
      onClick={() => {
        onClose();
        console.log("Hi modal");
      }}
    >
      <p className="modal-text">{children}</p>
    </div>
  );
};

export default Modal;
