import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import "./CardInfo.scss";
import { TfiText } from "react-icons/tfi";
import { BsTextParagraph } from "react-icons/bs";
import Editable from "../../Editable/Editable";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { SiGoogletasks } from "react-icons/si";
import { FaTasks } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Chip from "../../Chip/Chip";

const CardInfo = ({ onClose, card }) => {
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
      <div className="cardInfo custom-scroll">
        <div className="cardInfo-box">
          <div className="cardInfo-box-title">
            <TfiText />
            <p style={{ fontWeight: 600 }}>Title</p>
          </div>
          <div className="cardInfo-box-body">
            <Editable text={card.title} placeholder={"Enter title"} />
          </div>

          <div className="cardInfo-box-title">
            <BsTextParagraph />
            <p style={{ fontWeight: 600 }}>Description</p>
          </div>
          <div className="cardInfo-box-body">
            <Editable text={card.desc} placeholder={"Enter title"} />
          </div>

          <div className="cardInfo-box-title">
            <FaRegCalendarAlt />
            <p style={{ fontWeight: 600 }}>Calender</p>
          </div>
          <div className="cardInfo-box-body">
            <input type="date" placeholder="" defaultValue={card.date} />
          </div>

          <div className="cardInfo-box-title">
            <FaTags />
            <p style={{ fontWeight: 600 }}>Labels</p>
          </div>
          <div className="cardInfo-box-labels">
            <Chip text={card.label.tag} color={card.label.color} />
          </div>

          <div className="cardInfo-tags">
            {colors.map((item, index) => {
              return (
                <li
                  className={item === activeColor ? "tags-active" : "tags"}
                  key={index}
                  style={{ backgroundColor: item }}
                  onClick={() => setActiveColor(item)}
                ></li>
              );
            })}
          </div>

          <div className="cardInfo-box-title">
            <SiGoogletasks />
            <p style={{ fontWeight: 600 }}>Tasks</p>
          </div>
          <div className="cardInfo-box-progress">
            <div
              className="cardInfo-box-progress-bar"
              style={{ width: "25%" }}
            />
            <div className="cardInfo-box-list">
              <div className="cardInfo-task">
                <div>
                  <input type="checkbox" />
                  <p>Task 1</p>
                </div>
                <MdDelete style={{ fontSize: "25px" }} />
              </div>
            </div>
            <div className="cardInfo-box-list">
              <div className="cardInfo-task">
                <div>
                  <input type="checkbox" />
                  <p>Task 2</p>
                </div>
                <MdDelete style={{ fontSize: "25px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CardInfo;
