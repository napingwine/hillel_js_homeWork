import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => {
  return (
    <div>
      <div className="board-row">
        <Square val={squares[0]} chooseSquare={()=>onClick(0)} />
        <Square val={squares[1]} chooseSquare={()=>onClick(1)} />
        <Square val={squares[2]} chooseSquare={()=>onClick(2)} />
      </div>
      <div className="board-row">
        <Square val={squares[3]} chooseSquare={()=>onClick(3)} />
        <Square val={squares[4]} chooseSquare={()=>onClick(4)} />
        <Square val={squares[5]} chooseSquare={()=>onClick(5)} />
      </div>
      <div className="board-row">
        <Square val={squares[6]} chooseSquare={()=>onClick(6)} />
        <Square val={squares[7]} chooseSquare={()=>onClick(7)} />
        <Square val={squares[8]} chooseSquare={()=>onClick(8)} />
      </div>
    </div>
  );
};

export default Board;