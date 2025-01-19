import { Button } from "@mui/material";
import Square from "./Square";
import { calculateWinner } from "../function/function";

interface BoardProps {
  xIsNext: boolean;
  squares: string[];
  onPlay: (squares: string[]) => void;
  restart: () => void;
}

function Board({ xIsNext, squares, onPlay, restart }: BoardProps) {
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  return (
    <div>
      <div className="status">{status}</div>
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

      <Button
        variant="contained"
        style={{ marginTop: "15px" }}
        size="small"
        onClick={() => restart()}
      >
        restart
      </Button>
    </div>
  );
}
export default Board;
