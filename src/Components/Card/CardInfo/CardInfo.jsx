import React, { useEffect, useState } from "react";
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

const CardInfo = ({ onClose, card, boardId, updateCard }) => {
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

  const [values, setValues] = useState({
    ...card,
    task: Array.isArray(card.task) ? card.task : [],
  });

  const calculatePercent = () => {
    if (!Array.isArray(values.task)) return 0;
    const completed = values.task.filter((item) => item.completed).length;
    return values.task.length === 0
      ? 0
      : (completed / values.task.length) * 100;
  };

  useEffect(() => {
    if (updateCard) {
      updateCard(values.id, boardId, {
        ...values,
        task: Array.isArray(values.task) ? values.task : [],
      });
    }
  }, [values.id, values.title, values.desc, values.date, values.task]);

  return (
    <Modal onClose={onClose}>
      <div className="cardInfo custom-scroll">
        <div className="cardInfo-box">
          <div className="cardInfo-box-title">
            <TfiText />
            <p style={{ fontWeight: 600 }}>Title</p>
          </div>
          <div className="cardInfo-box-body">
            <Editable
              text={values.title || ""}
              placeholder={"Enter title"}
              onSubmit={(value) => setValues({ ...values, title: value })}
            />
          </div>

          <div className="cardInfo-box-title">
            <BsTextParagraph />
            <p style={{ fontWeight: 600 }}>Description</p>
          </div>
          <div className="cardInfo-box-body">
            <Editable
              text={values.desc || ""}
              placeholder={"Enter description"}
              onSubmit={(value) => setValues({ ...values, desc: value })}
            />
          </div>

          <div className="cardInfo-box-title">
            <FaRegCalendarAlt />
            <p style={{ fontWeight: 600 }}>Calendar</p>
          </div>
          <div className="cardInfo-box-body">
            <input
              type="date"
              placeholder=""
              defaultValue={new Date().toString().substring(0, 10)}
              onChange={(event) =>
                setValues({ ...values, date: event.target.value })
              }
            />
          </div>

          <div className="cardInfo-box-title">
            <FaTags />
            <p style={{ fontWeight: 600 }}>Labels</p>
          </div>
          <div className="cardInfo-box-labels">
            <Chip
              text={values.label?.tag || ""}
              color={values.label?.color || ""}
            />
          </div>

          <div className="cardInfo-tags">
            {colors.map((item, index) => (
              <li
                className={item === activeColor ? "tags-active" : "tags"}
                key={index}
                style={{ backgroundColor: item }}
                onClick={() => setActiveColor(item)}
              ></li>
            ))}
          </div>

          <div className="cardInfo-box-title">
            <SiGoogletasks />
            <p style={{ fontWeight: 600 }}>Tasks</p>
          </div>
          <div className="cardInfo-box-progress">
            <div
              className="cardInfo-box-progress-bar"
              style={{ width: `${calculatePercent()}%` }}
            />
            <div className="cardInfo-box-list">
              {values.task.map((item, key) => (
                <div className="cardInfo-box-list-content" key={key}>
                  <div>
                    <input
                      type="checkbox"
                      checked={item.completed || false}
                      onChange={() => {
                        const newTasks = values.task.map((t, index) => {
                          console.log("CardInfo tasks: ", t);
                          index === key ? { ...t, completed: !t.completed } : t;
                        });
                        setValues({ ...values, task: newTasks });
                      }}
                    />
                    <div>{item}</div>
                  </div>
                  <MdDelete
                    style={{ fontSize: "25px", cursor: "pointer" }}
                    onClick={() => {
                      const newTasks = values.task.filter(
                        (_, index) => index !== key
                      );
                      setValues({ ...values, task: newTasks });
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CardInfo;
7;
