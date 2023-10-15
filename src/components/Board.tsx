import { useEffect } from "react";

import {
  setCells,
  setFinished,
  setGameStat,
  useGameStore,
} from "../store/useGameStore";
import Cell from "./Cell";

const winningCombos = [
  // horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonal
  [0, 4, 8],
  [2, 4, 6],
];

export default function Board() {
  const turn = useGameStore((state) => state.turn);
  const cells = useGameStore((state) => state.cells);
  const total = useGameStore((state) => state.total);
  const finished = useGameStore((state) => state.finished);

  const handleClick = (index: number) => {
    if (cells[index] !== null || finished) return;
    setCells(index, turn);
  };

  useEffect(() => {
    if (finished) return;
    const isWin = winningCombos.some((combo) => {
      const [a, b, c] = combo;
      return cells[a] && cells[a] === cells[b] && cells[a] === cells[c];
    });
    if (isWin) {
      setFinished(true);
      setGameStat(turn === "circle" ? "cross" : "circle");
    } else if (!cells.includes(null)) {
      setFinished(true);
      setGameStat("draw");
    }
  }, [cells, turn]);

  return (
    <main className="my-8 space-y-3">
      <h1 className="text-center text-xl">
        Game {total} -{" "}
        {finished
          ? !cells.includes(null)
            ? "Draw"
            : `${turn === "circle" ? "X" : "O"} won`
          : `${turn === "circle" ? "O" : "X"}'s turn`}
      </h1>
      <div className="w-96 h-96 grid grid-cols-3 gap-1">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            index={index}
            cell={cell}
            handleClick={handleClick}
          />
        ))}
      </div>
    </main>
  );
}
