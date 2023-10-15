import { CircleIcon, CrossIcon } from "./SvgIcons";

type Props = {
  index: number;
  cell: null | "circle" | "cross";
  handleClick: (index: number) => void;
};

export default function Cell({ index, cell, handleClick }: Props) {
  return (
    <button
      key={index}
      aria-label="cell"
      onClick={() => handleClick(index)}
      className="w-[125px] h-[125px] bg-slate-100 rounded-md flex items-center justify-center"
    >
      {cell === "circle" ? (
        <CircleIcon className="w-10 h-10 text-secondary" />
      ) : cell === "cross" ? (
        <CrossIcon className="w-10 h-10 text-primary" />
      ) : null}
    </button>
  );
}
