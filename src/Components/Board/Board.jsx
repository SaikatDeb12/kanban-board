import React, { useState } from "react";
import "./Board.scss";
import "../../App.scss";
import { SlOptions } from "react-icons/sl";
import Card from "../Card/Card";
import Editable from "../Editable/Editable";
import Dropdown from "../Dropdown/Dropdown";

const Board = ({ board, cardValue }) => {
  const [dropdown, showDropdowm] = useState(false);
  console.log("Board, Cards", board.cards);
  return (
    <div className="board">
      <div className="board-top">
        <div className="board-top-title">
          <p>{board?.title}</p>
          <p>{board ? board?.cards?.length : 0}</p>
        </div>
        <SlOptions
          className="board-options"
          onClick={() => showDropdowm(!dropdown)}
        />
        <Dropdown className="board-dropdown">
          {dropdown ? "Delete board" : ""}
        </Dropdown>
      </div>
      <div className="board-card custom-scroll">
        {board?.cards?.map((item) => {
          return <Card key={item.id} cards={item} keyi={item.id} />;
        })}
        <Editable
          className="boards-card-add"
          text="Add Text"
          placeholder="Enter card title"
          onSubmit={(value) => {
            cardValue(value.textField);
            // console.log("Card value", value);
          }}
        />
      </div>
    </div>
  );
};

export default Board;
