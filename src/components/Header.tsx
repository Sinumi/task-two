// type Props = {};

import { useGameStore } from "../store/useGameStore";
import { CircleIcon, CrossIcon, FrameIcon } from "./SvgIcons";

export default function Header() {
  const gameStat = useGameStore((state) => state.gameStat);
  return (
    <header className="flex items-center justify-between gap-4">
      <div className="flex flex-col items-center gap-1 text-primary">
        <CrossIcon />
        <span>{gameStat.cross} wins</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-secondary">
        <CircleIcon />
        <span>{gameStat.circle} wins</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-foreground">
        <FrameIcon />
        <span>{gameStat.draw} draws</span>
      </div>
    </header>
  );
}
