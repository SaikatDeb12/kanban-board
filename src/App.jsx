import { useState } from "react";
import "./App.scss";
import Board from "./Components/Board/Board";
import "./Components/Board/Board.scss";
import Editable from "./Components/Editable/Editable";

function App() {
  const [board, setBoard] = useState([
    {
      id: Date.now() + Math.random(),
      title: "To Do",
      cards: [
        {
          id: Date.now() + Math.random(),
          title: "Card 1",
          task: "Some coding",
          label: {
            tag: "Frontend",
            color: "blue",
          },
          desc: "Lorem ipsum dolor sit amet",
          date: "25 Feb",
        },
      ],
    },
  ]);

  return (
    <div className="app">
      <div className="app-navbar">
        <h2>kanban</h2>
      </div>
      <div className="app-outer ">
        <div className="app-boards custom-scroll">
          {board.map((item) => {
            return <Board key={item.id} boards={item} />;
          })}
          <div className="app-boards-board">
            <Editable text={"Add Board"} placeholder={"Enter the title"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
