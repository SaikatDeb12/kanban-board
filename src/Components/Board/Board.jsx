import React, { useState } from "react";
import "./Board.scss";
import "../../App.scss";
import { SlOptions } from "react-icons/sl";
import Card from "../Card/Card";
import Editable from "../Editable/Editable";
import Dropdown from "../Dropdown/Dropdown";

const Board = ({ boards }) => {
  const [dropdown, showDropdowm] = useState(false);

  return (
    <div className="board">
      <div className="board-top">
        <p className="board-top-title">{boards?.title}</p>
        <SlOptions
          className="board-options"
          onClick={() => showDropdowm(!dropdown)}
        />
        <Dropdown className="board-dropdown">
          {dropdown ? "Delete board" : ""}
        </Dropdown>
      </div>
      <div className="board-card custom-scroll">
        {boards?.cards?.map((item) => {
          return (
            <div>
              <Card key={item.id} cards={item} />
            </div>
          );
        })}
        <Editable
          className="boards-card-add"
          text="Add Text"
          placeholder="Enter card title"
        />
      </div>
    </div>
  );
};

export default Board;
