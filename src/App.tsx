import Board from "./components/Board";
import Header from "./components/Header";
import {
  playAgain,
  resetGame,
  setFinished,
  useGameStore,
} from "./store/useGameStore";

export default function App() {
  const finished = useGameStore((state) => state.finished);

  return (
    <div className="w-96 mx-auto my-10">
      <Header />
      <Board />
      <footer>
        {finished && (
          <div className="flex flex-col gap-2 mt-4">
            <button
              className="w-full h-12 bg-slate-100 rounded-md text-primary"
              onClick={() => {
                playAgain();
                setFinished(false);
              }}
            >
              <span>Play Again</span>
            </button>
            <button
              className="w-full h-12 bg-slate-100 rounded-md text-secondary"
              onClick={() => {
                console.log("reset game");
                resetGame();
                setFinished(false);
              }}
            >
              <span>Reset Game</span>
            </button>
          </div>
        )}
      </footer>
    </div>
  );
}
