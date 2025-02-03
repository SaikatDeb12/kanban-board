import React from "react";
import "./Modal.scss";

const Modal = ({ onClose, children }) => {
  return (
    <div
      className="modal"
      onClick={() => {
        onClose();
      }}
    >
      <div
        className="modal-content"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
