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
  updateCard,
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

        {dropdown && (
          <Dropdown className="board-dropdown">
            <p onClick={removeBoard}>Delete board</p>
          </Dropdown>
        )}
      </div>
      <div className="board-card custom-scroll">
        {board?.cards?.map((item) => {
          return (
            <Card
              key={item.id}
              cards={item}
              removeCard={() => removeCard(item.id)}
              boardId={board.id}
              handleDragEnter={handleDragEnter}
              handleDragEnd={handleDragEnd}
              task={item.tasks} //changed from task to tasks
              updateCard={updateCard}
            />
          );
        })}
        <Editable
          className="boards-card-add"
          text="+ Add Card"
          placeholder="Enter card title"
          onSubmit={(value) => {
            console.log("addCard value in Board: ", value);
            cardValue(board.id, value);
          }}
        />
      </div>
    </div>
  );
};

export default Board;
