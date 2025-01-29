import { useState } from "react";
import "./App.scss";
import Board from "./Components/Board/Board";
import "./Components/Board/Board.scss";
import Editable from "./Components/Editable/Editable";

function App() {
  return (
    <div className="app">
      <div className="app-navbar">
        <h2>kanban</h2>
      </div>
      <div className="app-outer ">
        <div className="app-boards custom-scroll">
          <Board />
          <Board />
          <div className="app-boards-board">
            <Editable text={"Add Board"} placeholder={"Enter the title"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
