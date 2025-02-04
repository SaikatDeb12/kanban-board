import React from "react";
import Modal from "../../Modal/Modal";
import "./CardInfo.scss";
import { TfiText } from "react-icons/tfi";
import { BsTextParagraph } from "react-icons/bs";
import Editable from "../../Editable/Editable";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
const CardInfo = ({ onClose }) => {
  return (
    <Modal
      onClose={() => {
        onClose();
      }}
    >
      <div className="cardInfo">
        <div className="cardInfo-box">
          <div className="cardInfo-box-title">
            <TfiText />
            <p style={{ fontWeight: 600 }}>Title no 1</p>
          </div>
          <div className="cardInfo-box-body">
            <Editable text={"Add Title"} placeholder={"Enter title"} />
          </div>

          <div className="cardInfo-box-title">
            <BsTextParagraph />
            <p style={{ fontWeight: 600 }}>Description</p>
          </div>
          <div className="cardInfo-box-body">
            <Editable text={"Add Desctiption"} placeholder={"Enter title"} />
          </div>

          <div className="cardInfo-box-title">
            <FaRegCalendarAlt />
            <p style={{ fontWeight: 600 }}>Calender</p>
          </div>
          <div className="cardInfo-box-body">
            <input type="date" placeholder="" />
          </div>

          <div className="cardInfo-box-title">
            <FaTags />
            <p style={{ fontWeight: 600 }}>Calender</p>
          </div>
          <div className="cardInfo-box-body"></div>
        </div>
      </div>
    </Modal>
  );
};

export default CardInfo;
