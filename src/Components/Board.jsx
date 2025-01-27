import React from "react";
import "./Board.scss";

const Board = () => {
  return (
    <div className="board">
      <div className="board-top">
        <p className="board-top-title">To Do</p>
      </div>
      <div className="board-card">
        <h1>Card1</h1>
        <h1>Card2</h1>
        <h1>Card3</h1>
      </div>
    </div>
  );
};

export default Board;
