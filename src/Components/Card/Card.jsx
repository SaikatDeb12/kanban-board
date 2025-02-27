import React, { useState } from "react";
import Chip from "../Chip/Chip";
import "./Card.scss";
import { SlOptions } from "react-icons/sl";
import { GoClock } from "react-icons/go";
import { GoChecklist } from "react-icons/go";
import Dropdown from "../Dropdown/Dropdown";
import CardInfo from "./CardInfo/CardInfo";
import { useQueryState } from "nuqs";

const Card = ({
  cards,
  removeCard,
  boardId,
  handleDragEnter,
  handleDragEnd,
  updateCard,
}) => {
  const [dropdown, showDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { id, title, date, tasks, labels } = cards;

  return (
    <>
      {showModal && (
        <CardInfo
          onClose={() => {
            setShowModal(false);
            setTimeout(() => {}, 3000);
          }}
          card={cards}
          boardId={boardId}
          updateCard={updateCard}
        />
      )}
      <div
        className="card"
        draggable
        onDragEnd={() => handleDragEnd(cards.id, boardId)}
        onDragEnter={() => handleDragEnter(cards.id, boardId)}
        onClick={() => setShowModal(true)}
      >
        <div className="card-top">
          <div className="card-info">
            <div className="card-label">
              {cards.label?.map((label, index) => (
                <Chip key={index} text={label.tag} color={label.color} />
              ))}
            </div>
            <div className="options-container">
              <SlOptions
                className="options-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  showDropdown(!dropdown);
                }}
              />
              {dropdown && (
                <Dropdown>
                  <p
                    onClick={(e) => {
                      e.stopPropagation();
                      removeCard(cards.id);
                      showDropdown(false);
                    }}
                  >
                    Delete Card
                  </p>
                </Dropdown>
              )}
            </div>
          </div>
          <div className="card-title">{cards?.title}</div>
          <div className="card-task">{cards?.desc}</div>
          <div className="card-footer">
            <div className="card-footer-left">
              <span>
                <GoClock />
                {cards.date}
              </span>
            </div>
            <div className="card-footer-right">
              <GoChecklist />
              {cards.task.filter((item) => item.completed).length}/
              {cards.task.length}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
