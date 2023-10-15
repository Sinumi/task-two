// type Props = {};
import {
  playAgain,
  resetGame,
  setFinished,
  useGameStore,
} from "../store/useGameStore";

export default function Footer() {
  const finished = useGameStore((state) => state.finished);
  const total = useGameStore((state) => state.total);

  return (
    <footer>
      <div className="flex flex-col gap-2 mt-4">
        {(finished || total > 1) && (
          <button
            className="w-full h-12 bg-slate-100 rounded-md text-secondary"
            onClick={() => {
              resetGame();
              setFinished(false);
            }}
          >
            <span>Reset Game</span>
          </button>
        )}
        {finished && (
          <button
            className="w-full h-12 bg-slate-100 rounded-md text-primary"
            onClick={() => {
              playAgain();
              setFinished(false);
            }}
          >
            <span>Play Again</span>
          </button>
        )}
      </div>
    </footer>
  );
}
