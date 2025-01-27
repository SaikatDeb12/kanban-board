import React from "react";
import "./Board.scss";
import { SlOptions } from "react-icons/sl";
import Card from "../Card/Card";

const Board = () => {
  return (
    <div className="board">
      <div className="board-top">
        <p className="board-top-title">To Do</p>
        <SlOptions />
      </div>
      <div className="board-card">
        <Card />
      </div>
    </div>
  );
};

export default Board;
