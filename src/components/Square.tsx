import { Button } from "@mui/material";

interface SquareProps {
  value: string;
  onHandleClick: () => void;
}

function Square({ value, onHandleClick }: SquareProps) {
  return (
    <Button
      variant="outlined"
      style={{ borderRadius: "0px", width: "50px", height: "50px" }}
      onClick={() => onHandleClick()}
    >
      {value}
    </Button>
  );
}
export default Square;
