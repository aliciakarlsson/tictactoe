import { useEffect, useState } from "react";
import Board from "./Board";
import GameButton from "./GameButton";

const Tictactoe = () => {
  const [value, setValue] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [itsADraw, setItsADraw] = useState(false);

  //Vinstmönstrena
  const getWinner = () => {
    const winIndex = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winIndex.length; i++) {
      const [a, b, c] = winIndex[i];
      if (value[a] === value[b] && value[a] === value[c]) {
        return value[a];
      }
    }
    return null;
  };

  //Hanterar klicken i spelet
  const handleClick = (index: number) => {
    if (value[index] === null && !winner && !itsADraw) {
      const updateValue = [...value];
      updateValue[index] = currentPlayer;
      setValue(updateValue);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  //Kollar om boarden är full
  const isBoardFull = () => {
    return value.every((square) => square !== null);
  };

  //Uppdaterar vinnare eller säger om det är oavgjort
  useEffect(() => {
    const newWinner = getWinner();
    if (newWinner) {
      setWinner(newWinner);
    } else if (isBoardFull()) {
      setItsADraw(true);
    }
  });

  //Resettar spelet
  const resetGame = () => {
    setValue(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
    setItsADraw(false);
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <GameButton resetGame={resetGame} />
      <Board onClick={handleClick} value={value} />
      {winner ? <h2>Winner: {winner}</h2> : itsADraw ? <h2>It's a tie</h2> : ""}
    </div>
  );
};

export default Tictactoe;
