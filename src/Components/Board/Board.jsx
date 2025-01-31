import React, { useState } from "react";
import "./Board.scss";
import "../../App.scss";
import { SlOptions } from "react-icons/sl";
import Card from "../Card/Card";
import Editable from "../Editable/Editable";
import Dropdown from "../Dropdown/Dropdown";

const Board = ({ board }) => {
  const [dropdown, showDropdowm] = useState(false);

  return (
    <div className="board">
      <div className="board-top">
        <p className="board-top-title">{board?.title}</p>
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
          return <Card key={item.id} cards={item} />;
        })}
        <Editable
          className="boards-card-add"
          text="Add Text"
          placeholder="Enter card title"
          onSubmit={(value) => {
            console.log(value);
          }}
        />
      </div>
    </div>
  );
};

export default Board;
