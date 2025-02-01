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
        {
          id: Date.now() + Math.random(),
          title: "Card 2",
          task: "Some coding",
          label: {
            tag: "Backend",
            color: "green",
          },
          desc: "Lorem ipsum dolor sit amet",
          date: "25 Feb",
        },
      ],
    },
  ]);

  const addCard = (title, bid) => {
    const card = {
      id: Date.now() + Math.random(),
      title: title,
      task: "",
      label: [],
      desc: "",
      date: "",
    };

    const boardIndex = board.findIndex((item) => item.id === bid);
    const tempBoard = [...board];
    if (boardIndex < 0) return;
    tempBoard[boardIndex].cards.push(card);
    setBoard(tempBoard);
  };

  const removeCard = (bid, cid) => {
    console.log("Bid: ", bid);
    console.log("Cid: ", cid);
    const boardIndex = board.findIndex((item) => item.id === bid);
    if (boardIndex < 0) return;
    const tempBoard = [...board];
    const cardIndex = board[boardIndex].cards.findIndex(
      (item) => item.id === cid
    );
    if (cardIndex < 0) return;
    tempBoard[boardIndex].cards.splice(cardIndex, 1);
    setBoard(tempBoard);
  };

  const addBoard = (value) => {
    setBoard([
      ...board,
      {
        id: Date.now() + Math.random(),
        title: "To Do",
        cards: [
          {
            id: Date.now() + Math.random(),
            title: "Card 2",
            task: "Some coding",
            label: {
              tag: "Backend",
              color: "green",
            },
            desc: "Lorem ipsum dolor sit amet",
            date: "25 Feb",
          },
        ],
      },
    ]);
  };

  const removeBoard = (bid) => {
    const tempBoard = board.filter((item) => item.id !== bid);
    setBoard(tempBoard);
  };

  return (
    <div className="app">
      <div className="app-navbar">
        <h2>kanban</h2>
      </div>
      <div className="app-outer ">
        <div className="app-boards custom-scroll">
          {board.map((item) => {
            console.log("From App: ", item);
            return (
              <Board
                key={item.id}
                board={item}
                cardValue={(value) => addCard(value, item.id)}
                removeBoard={() => removeBoard(item.id)}
                removeCard={(cid) => removeCard(item.id, cid)}
              />
            );
          })}
          <div className="app-boards-board">
            <Editable
              text={"Add Board"}
              placeholder={"Enter the title"}
              onSubmit={(value) => addBoard(value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
