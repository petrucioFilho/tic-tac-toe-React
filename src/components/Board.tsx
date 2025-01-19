import { Button } from "@mui/material";
import Square from "./Square";
import { useState } from "react";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  function handleClick(i: number) {
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  return (
    <div>
      <div className="status">Next player: X</div>
      <div className="board">
        <div className="board-row">
          <Square value={squares[0]} onHandleClick={() => handleClick(0)} />
          <Square value={squares[1]} onHandleClick={() => handleClick(1)} />
          <Square value={squares[2]} onHandleClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onHandleClick={() => handleClick(3)} />
          <Square value={squares[4]} onHandleClick={() => handleClick(4)} />
          <Square value={squares[5]} onHandleClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onHandleClick={() => handleClick(6)} />
          <Square value={squares[7]} onHandleClick={() => handleClick(7)} />
          <Square value={squares[8]} onHandleClick={() => handleClick(8)} />
        </div>
      </div>

      <Button variant="contained" style={{ marginTop: "15px" }} size="small">
        restart
      </Button>
    </div>
  );
}
export default Board;
