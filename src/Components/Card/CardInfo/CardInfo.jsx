import React from "react";
import Modal from "../../Modal/Modal";

const CardInfo = ({ onClose }) => {
  console.log(onClose);
  return (
    <div>
      <Modal
        onClose={() => {
          console.log("cardInfo");
          onClose();
        }}
      >
        Hello
      </Modal>
    </div>
  );
};

export default CardInfo;
