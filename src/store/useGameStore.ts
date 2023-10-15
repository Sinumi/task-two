import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const initialState = {
  total: 1,
  finished: false,
  cells: Array(9).fill(null),
  turn: "cross" as "cross" | "circle",
  gameStat: {
    cross: 0,
    circle: 0,
    draw: 0,
  },
};

export const useGameStore = create<typeof initialState>()(
  devtools(
    persist(() => initialState, {
      name: "gameStore",
    }),
    { name: "gameStore" }
  )
);

export const setCells = (index: number, turn: (typeof initialState)["turn"]) =>
  useGameStore.setState((state) => {
    const cells = [...state.cells];
    cells[index] = turn;
    state.turn = state.turn === "cross" ? "circle" : "cross";
    return { cells };
  });

export const setFinished = (finished: boolean) =>
  useGameStore.setState(() => {
    return { finished };
  });

export const setGameStat = (winner: "cross" | "circle" | "draw") =>
  useGameStore.setState((state) => {
    const gameStat = { ...state.gameStat };
    gameStat[winner] += 1;
    return { gameStat };
  });

export const playAgain = () =>
  useGameStore.setState((state) => {
    state.total += 1;
    state.cells = Array(9).fill(null);
    state.turn = "cross";
    return state;
  });

export const resetGame = () =>
  useGameStore.setState((state) => {
    state.total = 1;
    state.turn = "cross";
    state.cells = Array(9).fill(null);
    state.gameStat = {
      cross: 0,
      circle: 0,
      draw: 0,
    };
    return state;
  });
