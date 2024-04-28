//Boarden som håller hela spelet

import Square from "./Square";

type BoardProps = {
  onClick: (i: number) => void;
  value: string[];
};

const Board = ({ onClick, value }: BoardProps) => {
  return (
    <div className="board">
      <div className="row">
        <Square onClick={() => onClick(0)} value={value[0]} />
        <Square onClick={() => onClick(1)} value={value[1]} />
        <Square onClick={() => onClick(2)} value={value[2]} />
      </div>
      <div className="row">
        <Square onClick={() => onClick(3)} value={value[3]} />
        <Square onClick={() => onClick(4)} value={value[4]} />
        <Square onClick={() => onClick(5)} value={value[5]} />
      </div>
      <div className="row">
        <Square onClick={() => onClick(6)} value={value[6]} />
        <Square onClick={() => onClick(7)} value={value[7]} />
        <Square onClick={() => onClick(8)} value={value[8]} />
      </div>
    </div>
  );
};

export default Board;
