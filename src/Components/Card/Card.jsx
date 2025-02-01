import React, { useState } from "react";
import Chip from "../Chip/Chip";
import "./Card.scss";
import { SlOptions } from "react-icons/sl";
import { GoClock } from "react-icons/go";
import { GoChecklist } from "react-icons/go";
import Dropdown from "../Dropdown/Dropdown";
import CardInfo from "./CardInfo/CardInfo";

const Card = ({
  cards,
  removeCard,
  boardId,
  handleDragEnter,
  handleDragEnd,
}) => {
  const [dropdown, showDropdown] = useState(false);
  return (
    <div
      className="card"
      draggable
      onDragEnd={() => handleDragEnd(cards.id, boardId)}
      onDragEnter={() => handleDragEnter(cards.id, boardId)}
    >
      <CardInfo />
      <div className="card-top">
        <div className="card-label">
          <Chip text={cards.label?.tag} color={cards.label?.color} />
          <SlOptions
            style={dropdown && { opacity: "1" }}
            className="options"
            onClick={() => showDropdown(!dropdown)}
          />
          <Dropdown>
            {dropdown ? <p onClick={removeCard}>Delete Card</p> : ""}
          </Dropdown>
        </div>
        <div className="card-title">{cards?.title}</div>
        <div className="card-task">{cards?.task}</div>
        <div className="card-footer">
          <p>
            <GoClock />
            {cards.date}
          </p>
          <p>
            <GoChecklist />
            2/3
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
