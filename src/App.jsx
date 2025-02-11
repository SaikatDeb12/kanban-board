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
          task: ["Some coding", "Some debugging"],
          label: [
            {
              tag: "Frontend",
              color: "blue",
            },
          ],
          desc: "Lorem ipsum dolor sit amet",
          date: "25 Feb",
        },
        {
          id: Date.now() + Math.random(),
          title: "Card 2",
          task: ["Some coding", "Some debugging"],
          label: [
            {
              tag: "Backend",
              color: "green",
            },
            {
              tag: "FullStack",
              color: "blueviolet",
            },
          ],
          desc: "Lorem ipsum dolor sit amet",
          date: "25 Feb",
        },
      ],
    },
  ]);

  const addCard = (title, bid) => {
    console.log("value in addCard: ", title);
    const card = {
      id: Date.now() + Math.random(),
      title: title,
      task: [],
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
        title: value,
        cards: [],
      },
    ]);
  };

  const removeBoard = (bid) => {
    const tempBoard = board.filter((item) => item.id !== bid);
    setBoard(tempBoard);
  };

  const [target, setTarget] = useState({
    cid: "",
    bid: "",
  });

  const handleDragEnter = (cid, bid) => {
    setTarget({ cid: cid, bid: bid });
  };

  const handleDragEnd = (cid, bid) => {
    let sCardIndex, sBoardIndex, tCardIndex, tBoardIndex;
    sBoardIndex = board.findIndex((item) => item.id === bid);

    if (sBoardIndex < 0) return;
    console.log("SourceBoard", sBoardIndex);

    sCardIndex = board[sBoardIndex].cards?.findIndex((item) => item.id === cid);
    console.log("SourceCard", sCardIndex);
    if (sCardIndex < 0) return;

    tBoardIndex = board.findIndex((item) => item.id === target.bid);
    if (tBoardIndex < 0) return;
    tCardIndex = board[tBoardIndex].cards.findIndex(
      (item) => item.id === target.cid
    );
    console.log("TargetBoard", tBoardIndex);
    if (tCardIndex < 0) return;

    const tempBoard = [...board];
    const tempCard = tempBoard[sBoardIndex].cards[sCardIndex];
    console.log("TargetCard", tCardIndex);

    //delete
    tempBoard[sBoardIndex].cards.splice(sCardIndex, 1);
    //insert
    tempBoard[tBoardIndex].cards.splice(tCardIndex, 0, tempCard);

    setBoard(tempBoard);
  };

  const updateCard = (cid, bid, card) => {
    const boardIndex = board.findIndex((item) => item.id == bid);
    if (boardIndex < 0) return;
    const cardIndex = board[boardIndex].cards.findIndex(
      (item) => item.id === cid
    );
    if (cardIndex < 0) return;

    const tempBoard = [...board];
    tempBoard[boardIndex].cards[cardIndex] = card;
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
            return (
              <Board
                key={item.id}
                board={item}
                cardValue={(value) => addCard(value, item.id)}
                removeBoard={() => removeBoard(item.id)}
                removeCard={(cid) => removeCard(item.id, cid)}
                handleDragEnter={(cid, bid) => {
                  console.log("recived Cid: ", cid);
                  return handleDragEnter(cid, bid);
                }}
                handleDragEnd={(cid, bid) => handleDragEnd(cid, bid)}
                updateCard={updateCard}
              />
            );
          })}
          <div className="app-boards-board">
            <Editable
              text={"+ Add Board"}
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
