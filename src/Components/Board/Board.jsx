import React, { useState } from "react";
import "./Board.scss";
import "../../App.scss";
import { SlOptions } from "react-icons/sl";
import Card from "../Card/Card";
import Editable from "../Editable/Editable";
import Dropdown from "../Dropdown/Dropdown";

const Board = ({ board, cardValue, removeBoard, removeCard }) => {
  const [dropdown, showDropdowm] = useState(false);
  // console.log("Board, Cards", board.cards);
  return (
    <div className="board">
      <div className="board-top">
        <div className="board-top-title">
          {console.log("From Board: ", board)}
          <p>{board?.title}</p>
          <p>{board?.cards?.length}</p>
        </div>
        <SlOptions
          className="board-options"
          onClick={() => showDropdowm(!dropdown)}
        />
        <Dropdown className="board-dropdown">
          {dropdown ? <p onClick={removeBoard}>Delete board</p> : ""}
        </Dropdown>
      </div>
      <div className="board-card custom-scroll">
        {board?.cards?.map((item) => {
          console.log("passing id: ", item.id);
          return (
            <Card
              key={item.id || Math.random()}
              cards={item}
              removeCard={removeCard(item.id)}
            />
          );
        })}
        <Editable
          className="boards-card-add"
          text="Add Text"
          placeholder="Enter card title"
          onSubmit={(value) => {
            cardValue(value.textField);
          }}
        />
      </div>
    </div>
  );
};

export default Board;
