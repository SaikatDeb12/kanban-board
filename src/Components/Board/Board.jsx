import React, { useState } from "react";
import "./Board.scss";
import "../../App.scss";
import { SlOptions } from "react-icons/sl";
import Card from "../Card/Card";
import Editable from "../Editable/Editable";
import Dropdown from "../Dropdown/Dropdown";
import CardInfo from "../Card/CardInfo/CardInfo";

const Board = ({
  board,
  cardValue,
  removeBoard,
  removeCard,
  handleDragEnter,
  handleDragEnd,
}) => {
  const [dropdown, showDropdowm] = useState(false);
  return (
    <div className="board">
      <div className="board-top">
        <div className="board-top-title">
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
          return (
            <Card
              key={item.id || Math.random()}
              cards={item}
              removeCard={() => removeCard(item.id)}
              boardId={board.id}
              handleDragEnter={handleDragEnter}
              handleDragEnd={handleDragEnd}
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
