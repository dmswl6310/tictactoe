import { useState } from "react";
import Board from "./Board";
import Info from "./Info";

// 3*3 빙고
function Game() {
  const [turn, setTurn] = useState<boolean>(false); // o인지 x인지
  const [square, setSquare] = useState<string[]>(Array(9).fill(null)); //3*3 빙고판
  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  };
  const winner = checkWinner();
  const changeTurn = () => setTurn((turn) => !turn); //o다음 x..
  const winnerText = winner
    ? `winner: ${turn ? "X" : "O"}`
    : `Next player: ${turn ? "O" : "X"}`;
  // 보드판 클릭시 => o/x 보드판에 표시 & turn 바꿈
  const handleClick = (i: number) => {
    const curSquare = square.slice();
    if (curSquare[i] || winner) return;

    curSquare[i] = turn ? "O" : "X";
    changeTurn();
    setSquare(curSquare);
  };

  return (
    <div className="game">
      <Board onClick={handleClick} squares={square} />
      <Info infoText={winnerText} />
    </div>
  );
}

export default Game;
