import { useState } from "react";
import "./App.scss";
import Board from "./Components/Board/Board";
import "./Components/Board/Board.scss";

function App() {
  return (
    <div className="app">
      <div className="app-navbar">
        <h2>kanban</h2>
      </div>
      <div className="app-outer">
        <div className="app-boards">
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
        </div>
      </div>
    </div>
  );
}

export default App;
