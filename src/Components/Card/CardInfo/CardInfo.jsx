import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import "./CardInfo.scss";
import { TfiText } from "react-icons/tfi";
import { BsTextParagraph } from "react-icons/bs";
import Editable from "../../Editable/Editable";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
const CardInfo = ({ onClose }) => {
  const colors = [
    "#a8193d",
    "#4fcc25",
    "#1ebffa",
    "#8da377",
    "#9975bd",
    "#cf61a1",
    "#240959",
  ];
  const [activeColor, setActiveColor] = useState("");
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
            <p style={{ fontWeight: 600 }}>Labels</p>
          </div>
          <div className="cardInfo-lable">
            {colors.map((item, index) => {
              return (
                <li
                  className={item === activeColor ? "tags-active" : "tags"}
                  key={index}
                  style={{ backgroundColor: item }}
                  // onClick={() => setActiveColor(!activeColor)}
                  onClick={() => setActiveColor(item)}
                ></li>
              );
            })}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CardInfo;
